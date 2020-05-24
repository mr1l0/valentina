insert into product(id, name, description, active, createdAt, updatedAt)values(UUID(), 'Pastel', 'Descrição do salgado ingredientes e afins', true, createdAt, updatedAt);
insert into product(id, name, description, active, createdAt, updatedAt)values(UUID(), 'Coxinha', 'Descrição do salgado ingredientes e afins', true, createdAt, updatedAt);
insert into product(id, name, description, active, createdAt, updatedAt)values(UUID(), 'Salsicha', 'Descrição do salgado ingredientes e afins', true, createdAt, updatedAt);
insert into product(id, name, description, active, createdAt, updatedAt)values(UUID(), 'Risoles de frango', 'Descrição do salgado ingredientes e afins', true, createdAt, updatedAt);
insert into product(id, name, description, active, createdAt, updatedAt)values(UUID(), 'Risoles de palmito', 'Descrição do salgado ingredientes e afins', true, createdAt, updatedAt);
insert into product(id, name, description, active, createdAt, updatedAt)values(UUID(), 'Risoles de pizza', 'Descrição do salgado ingredientes e afins', true, createdAt, updatedAt);
insert into product(id, name, description, active, createdAt, updatedAt)values(UUID(), 'Bolinha de queijo', 'Descrição do salgado ingredientes e afins', true, createdAt, updatedAt);
insert into product(id, name, description, active, createdAt, updatedAt)values(UUID(), 'Bolinha de calabresa com queijo', 'Descrição do salgado ingredientes e afins', true, createdAt, updatedAt);
insert into product(id, name, description, active, createdAt, updatedAt)values(UUID(), 'Kibe', 'Descrição do salgado ingredientes e afins', true, createdAt, updatedAt);

insert into product_group (id, name, active)values('60f9b6b0-977f-11ea-abde-e0db55ffb209', 'Salgadinhos', true);
update product set groupId = '60f9b6b0-977f-11ea-abde-e0db55ffb209' where id <> '';

insert into product_group (id, name, active)values('0707bd45-9780-11ea-abde-e0db55ffb209', 'Bebidas', true);
insert into product(id, name, description, active, groupId, price)values(UUID(), 'Coca-Cola 2L', '', true, '0707bd45-9780-11ea-abde-e0db55ffb209', 10.00);
insert into product(id, name, description, active, groupId, price)values(UUID(), 'Coca-Cola 600ml', '', true, '0707bd45-9780-11ea-abde-e0db55ffb209', 7.00);
insert into product(id, name, description, active, groupId, price)values(UUID(), 'Coca-Cola Lata 350ml', '', true, '0707bd45-9780-11ea-abde-e0db55ffb209', 5.00);


