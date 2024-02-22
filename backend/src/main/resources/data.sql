INSERT INTO `user_tbl` (`address`, `cellphone`, `email`, `password`, `role`, `username`)
VALUES
    ('Av. Rivadavia 1234, Buenos Aires', '555-1234', 'juanmartinez@hotmail.com', 'admin123', 'ADMIN', 'Juan Martínez'),
    ('Av. Corrientes 5678, Córdoba', '555-5678', 'gomezmaria@gmail.com', 'user123', 'USER', 'María Gómez');

INSERT INTO `product` (`category`, `description`, `image_url`, `name`, `price`, `stock`)
VALUES
    ('FRUTAS', 'Manzanas frescas y jugosas', 'manzanas.jpg', 'Manzanas Gala', 2.5, 50),
    ('VERDURAS', 'Lechuga fresca para ensaladas', 'lechuga.jpg', 'Lechuga Iceberg', 1.8, 30),
    ('CARNES', 'Filete de ternera premium', 'filete_ternera.jpg', 'Filete de Ternera', 10.75, 20),
    ('LACTEOS', 'Leche entera fresca', 'leche.jpg', 'Leche Entera', 1.2, 100),
    ('PANADERIA', 'Pan integral recién horneado', 'pan_integral.jpg', 'Pan Integral Artesanal', 2.0, 40),
    ('PESCADO', 'Salmón fresco del Atlántico', 'salmon.jpg', 'Salmón Atlántico', 8.5, 15),
    ('LEGUMBRES', 'Lentejas verdes de alta calidad', 'lentejas.jpg', 'Lentejas', 1.0, 60),
    ('FRUTAS', 'Piña fresca de Costa Rica', 'pina.jpg', 'Piña Golden', 3.0, 40),
    ('CARNES', 'Pollo fresco sin hormonas', 'pollo.jpg', 'Pollo Orgánico', 6.0, 25),
    ('VERDURAS', 'Zanahorias orgánicas', 'zanahorias.jpg', 'Zanahorias Orgánicas', 0.75, 50);

INSERT INTO `calification` (`product_id`, `user_id`)
VALUES
    (1, 1),
    (2, 2),
    (3, 1),
    (4, 2),
    (5, 1),
    (6, 2),
    (7, 1),
    (8, 2),
    (9, 1),
    (10, 2);