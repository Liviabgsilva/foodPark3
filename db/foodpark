-- Criando a tabela de produtos da lanchonete
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,              -- Gera o ID automaticamente (0, 1, 2...)
    nome VARCHAR(255) NOT NULL,         -- Nome do produto
    preco NUMERIC(10, 2) NOT NULL,       -- Preço (ex: 25.00)
    estabelecimento VARCHAR(255) NOT NULL -- Nome do restaurante/lanchonete
);

-- Exemplo de inserção do registro:
INSERT INTO produtos (nome, preco, estabelecimento) VALUES
('Coca zero com mentos', 25.00, 'Cereal'),
('X-Burguer Explosivo', 32.50, 'Cereal'),
('Porção de Batata Maluca', 22.00, 'Cereal'),
('Milkshake de Bacon', 18.90, 'Cereal'),
('Coxinha de Jaca', 9.50, 'Cereal'),
('Pastel de Vento Premium', 12.00, 'Cereal'),
('Guaraná Antarctica 2L', 11.00, 'Cereal'),
('Combo Misto Quente + Café', 15.00, 'Cereal'),
('Capuccino Turbinado 500ml', 16.50, 'Cereal'),
('Pão de Queijo Recheado', 8.00, 'Cereal'),
('Pizza Individual de Quatro Queijos', 38.00, 'Cereal'),
('Calzone de Frango com Catupiry', 34.00, 'Cereal'),
('Hot Dog Completo Prensado', 14.00, 'Cereal'),
('Açaí Turbinado 700ml', 26.00, 'Cereal'),
('Suco Natural de Laranja 500ml', 10.00, 'Cereal');

-- Consulta simples dos produtos:
SELECT * FROM produtos;