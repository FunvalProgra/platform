---
title: "Repaso: Stored Procedures, Triggers y Functions"
date: 2023-07-26T18:07:07-05:00
draft: false
showPagination: false
---

Te daré varios ejemplos. Sé que pueden ser muchos, y si gustas, puedes solo analizar aquellos que te ayuden a repasar conceptos nuevos.

## Stored procedures

1. Crear un procedimiento almacenado que devuelva todos los registros de una tabla específica.

```sql
DELIMITER //
CREATE PROCEDURE ObtenerRegistrosTabla(IN NombreTabla VARCHAR(100))
BEGIN
    SELECT * FROM NombreTabla;
END //
DELIMITER ;
```

2. Crear un procedimiento almacenado que inserte un nuevo registro en una tabla.

```sql
DELIMITER //
CREATE PROCEDURE InsertarNuevoRegistro(IN Nombre VARCHAR(50), IN Edad INT, IN Email VARCHAR(100))
BEGIN
    INSERT INTO Personas (Nombre, Edad, Email) VALUES (Nombre, Edad, Email);
END //
DELIMITER ;
```

3. Crear un procedimiento almacenado que actualice el salario de un empleado en función de su identificador.

```sql
DELIMITER //
CREATE PROCEDURE ActualizarSalarioEmpleado(IN EmpleadoID INT, IN NuevoSalario DECIMAL(10, 2))
BEGIN
    UPDATE Empleados SET Salario = NuevoSalario WHERE EmpleadoID = EmpleadoID;
END //
DELIMITER ;
```

4. Crear un procedimiento almacenado que calcule la suma de dos números y devuelva el resultado.

```sql
DELIMITER //
CREATE PROCEDURE SumarDosNumeros(IN Numero1 INT, IN Numero2 INT, OUT Resultado INT)
BEGIN
    SET Resultado = Numero1 + Numero2;
END //
DELIMITER ;
```

5. Crear un procedimiento almacenado que calcule el promedio de salarios de los empleados y lo actualice en una tabla de resumen.

```sql
-- Crear el procedimiento almacenado
DELIMITER //
CREATE PROCEDURE ActualizarPromedioSalarios()
BEGIN
    DECLARE avgSalario DECIMAL(10, 2);
    SELECT AVG(Salario) INTO avgSalario FROM Empleados;

    -- Actualizar el promedio en la tabla de resumen
    UPDATE TablaResumen
    SET PromedioSalario = avgSalario
    WHERE ID = 1;
END //
DELIMITER ;
```

## Stored procedures

1. Crear un trigger que actualice la fecha de modificación cada vez que se inserte o actualice un registro en una tabla.

```sql
CREATE TRIGGER ActualizarFechaModificacion
BEFORE INSERT OR UPDATE ON MiTabla
FOR EACH ROW
BEGIN
    SET NEW.FechaModificacion = NOW();
END;
```

2. Crear un trigger que impida la eliminación de registros de una tabla en ciertas condiciones.

```sql
CREATE TRIGGER ImpedirEliminacion
BEFORE DELETE ON MiTabla
FOR EACH ROW
BEGIN
    IF OLD.CondicionProhibida = 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No se permite eliminar este registro.';
    END IF;
END;
```

3. Crear un trigger que actualice el stock de un producto automáticamente cuando se registre una venta.

```sql
CREATE TRIGGER ActualizarStockDespuesDeVenta
AFTER INSERT ON Ventas
FOR EACH ROW
BEGIN
    UPDATE Productos
    SET Stock = Stock - NEW.Cantidad
    WHERE ProductoID = NEW.ProductoID;
END;
```

4. Crear un trigger que registre los cambios de precio de un producto en una tabla de historial de precios.

```sql
-- Crear la tabla de historial de precios (si aún no existe)
CREATE TABLE IF NOT EXISTS HistorialPrecios (
    HistorialID INT AUTO_INCREMENT PRIMARY KEY,
    ProductoID INT,
    PrecioAnterior DECIMAL(10, 2),
    PrecioNuevo DECIMAL(10, 2),
    FechaCambio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear el trigger
CREATE TRIGGER RegistrarCambioPrecio
AFTER UPDATE ON Productos
FOR EACH ROW
BEGIN
    IF NEW.Precio <> OLD.Precio THEN
        INSERT INTO HistorialPrecios (ProductoID, PrecioAnterior, PrecioNuevo)
        VALUES (NEW.ProductoID, OLD.Precio, NEW.Precio);
    END IF;
END;
```

5. Crear un trigger que restrinja la inserción de registros en una tabla en función de una condición específica.

```sql
CREATE TRIGGER ImpedirInsercion
BEFORE INSERT ON MiTabla
FOR EACH ROW
BEGIN
    IF NEW.CondicionProhibida = 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No se permite la inserción con esta condición.';
    END IF;
END;
```

## Functions

1. Crear una función que calcule el área de un círculo dado su radio.

```sql
DELIMITER //
CREATE FUNCTION CalcularAreaCirculo(Radio DECIMAL(10, 2))
RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE Area DECIMAL(10, 2);
    SET Area = 3.14159 * Radio * Radio;
    RETURN Area;
END //
DELIMITER ;
```

2. Crear una función que convierta una cantidad de dólares a euros utilizando un tipo de cambio dado.

```sql
DELIMITER //
CREATE FUNCTION ConvertirDolaresAEuros(Dolares DECIMAL(10, 2), TipoCambio DECIMAL(10, 2))
RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE Euros DECIMAL(10, 2);
    SET Euros = Dolares * TipoCambio;
    RETURN Euros;
END //
DELIMITER ;
```

3. Crear una función que devuelva el nombre completo (nombre y apellido) de un empleado en base a su ID.

```sql
DELIMITER //
CREATE FUNCTION ObtenerNombreCompletoEmpleado(EmpleadoID INT)
RETURNS NVARCHAR(100)
BEGIN
    DECLARE NombreCompleto NVARCHAR(100);
    SELECT CONCAT(Nombre, ' ', Apellido) INTO NombreCompleto FROM Empleados WHERE EmpleadoID = EmpleadoID;
    RETURN NombreCompleto;
END //
DELIMITER ;
```

4. Crear una función que devuelva el total de ventas realizadas por un cliente específico en un rango de fechas.

```sql
DELIMITER //
CREATE FUNCTION CalcularTotalVentasPorCliente(ClienteID INT, FechaInicio DATE, FechaFin DATE)
RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE TotalVentas DECIMAL(10, 2);
    SELECT COALESCE(SUM(Importe), 0) INTO TotalVentas FROM Ventas WHERE ClienteID = ClienteID AND FechaVenta BETWEEN FechaInicio AND FechaFin;
    RETURN TotalVentas;
END //
DELIMITER ;
```

5. Crear una función que cuente el número de productos en una categoría determinada.

```sql
DELIMITER //
CREATE FUNCTION ContarProductosPorCategoria(CategoriaID INT)
RETURNS INT
BEGIN
    DECLARE Contador INT;
    SELECT COUNT(*) INTO Contador FROM Productos WHERE CategoriaID = CategoriaID;
    RETURN Contador;
END //
DELIMITER ;
```
