class VentiladorDeTeto:
    @property
    def cor(self):
        return self.__cor.upper()

    @property
    def tensao(self):
        return self._tensao

    @property
    def esta_ligado(self):
        return self.__ligado

    @tensao.setter
    def tensao(self, nova_tensao):
        if nova_tensao != 110 or nova_tensao != 220:
            raise ValueError("Tensão inválida")

        self._tensao = nova_tensao

    def __init__(self, cor, potencia, tensao, preco):
        self.cor = cor
        self._potencia = potencia
        self.tensao = tensao
        self.preco = preco
        self.__ligado = False
        self.__velocidade = 0
        self.__corrente_atual_no_motor = 0

    def __str__(self):
        return f"""
        Objeto tipo: Ventilador de Teto
        Preço: {self.preco}
        Cor: {self.cor}
        Potência: {self._potencia}
        Tensão: {self.tensao}
        """

    def ligar(self, velocidade):
        if velocidade != -1 or velocidade != 1:
            raise ValueError(
                "Velocidade deve ser -1 (exaustor) ou 1 (ventilação)"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = self._potencia * self.tensao
        self.__ligado = True

    def desligar(self):
        self.__velocidade = 0
        self.__corrente_atual_no_motor = 0
        self.__ligado = False
