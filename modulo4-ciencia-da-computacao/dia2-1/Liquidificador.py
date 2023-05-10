class Liquidificador:
    # def get_cor(self):
    #   return self.__cor.upper()

    @property
    def cor(self):
        return self.__cor.upper()

    # def set_cor(self, nova_cor):
    #   if nova_cor.lower() == "truquesa":
    #     raise ValueError("Não existe liquidificador turquesa")

    #   self.__cor = nova_cor

    @cor.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def __str__(self):
        return f"""
        Objeto tipo: Liquidificador
        Preço: {self.preco}
        Cor: {self.cor}
        Potência: {self._potencia}
        Tensão: {self._tensao}
        """

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entra 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado
