class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.ventilador_de_teto = None

    def __str__(self):
        if self.ventilador_de_teto:
            return f"""
                {self.nome} - possui {self.saldo_na_conta} reais em sua conta.
                {self.nome} - possui um ventilador.
                """
        return (
            f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta."
        )

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_ventilador_de_teto(self, ventilador_de_teto):
        if ventilador_de_teto.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador_de_teto.preco
            self.ventilador_de_teto = ventilador_de_teto
