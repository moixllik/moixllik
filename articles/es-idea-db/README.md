# Base de datos

> Extender el registro del libro diario a fenómenos no contables

![nobit-db](https://www.plantuml.com/plantuml/png/HOv12W8n34NtEKKymDn0P0Gznn3RW8Ks0-tlOX3lBd6Sklg1lFoNkK4gUibqmbEBShS4ZHIojCRN4DPkQFmYJf7O1BsgPr7Yg92K6xr_zDrGamxuM7EeAj2u20PwIr8t1zLGjyLnsLtVsTP7WZTu-7tq_FleK4sNlOhsmlCqNgPPBVQIFm00)

## I. Cuentas

Son un conjunto de cuentas (`#{Account}`) que sirven para describir parte de un fenómeno.

```
Accounts => #{Account}

Account:
    id => #Account
    nature => Nobit | Debit | Credit
    name => Object -> str
    details => Object -> str
```

- **Id**.- Identificador de la cuenta.
- **Nature**.- Naturaleza de la cuenta.
- **Name**.- Nombre de la cuenta.
- **Details**.- Detalles de la cuenta.

## II. Registros

Los registros (`#[Entry]`) sirven para describir un fenómeno y sus efectos.

```
Entries => #[Entry]

Entry:
    id => #Entry
    details => Object -> str
    created_at => DateTime -> fmt
```

- **Id**.- Identificados del registro.
- **Details**.- Detalles del registro.
- **created_at**.- Fecha y hora que se da el fenómeno.

## III. Libro diario

Es una base de datos en la que se tiene de forma inmutable información sobre los fenómenos.

```
Diary:
    entry_id => #Entry
    account_id => #Account
    nobit => Object -> num
    debit => Object -> cur
    credit => Object -> cur
    details => Object -> str
```

- **Entry Id**.- Identificador del registro.
- **Account Id**.- Identificador de la cuenta.
- **Nobit**.- Valores de naturaleza _Nobit_.
- **Debit**.- Importes que incrementan la naturaleza _Debit_.
- **Credit**.- Importes que incrementan la naturaleza _Credit_.
- **Details**.- Detalles motivan al uso de la cuenta.
