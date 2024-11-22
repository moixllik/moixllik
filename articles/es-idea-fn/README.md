# Lenguaje functional

> Abstraer ideas mentales en un lenguaje computable

```
Moix => X -> #X

-- Morfismos: <=>
-- Objetos: X
-- Identidad: #X
-- X-ideas
```

## I. Categorías

\\( X \in \text{Cat} \\)

Son el conjunto de entes `X` y pueden ser llamados con arroba `@`.

```
-- ./main.cat
@/db -- biblioteca global
@./lib -- biblioteca local
```

## II. Morfismos

\\( mor: E \to E' \\)

Son las flechas que sirven para estructurar las relaciones entre entes.

```
<=, => -- relación fuerte o de asignación
<-, -> -- relación débil o de proceso
```

### 2.1. Composición

\\( f: A \to B \\)

\\( g: B \to C \\)

\\( h \mid g \circ f: A \to C \\)

\\( h \circ (g \circ f) = (h \circ g) \circ f \\)

## III. Objetos

\\( A, B, C \in \text{Cat} \\)

Son entidades abstractas con significado propio.

```
Object:
    id => #Object -- identificador
    str => String -- cadena de texto
    cur => Currency -- Unidad monetaria >= 0
    num => Number -- Número negativo o positivo


DateTime:
    fmt => String -> fmt -- dar formato
```

## IV. Identidad

\\(1\_{X}: X \to X \\)

Es la entidad neutra que en un mismo plano de abstracción distingue al ente entre otros entes.

```
#X => X -> #X
```

### 4.1. Composición neutra

\\(f: A \to B, g: B \to A \\)

\\( 1*{B} \circ f = f = f \circ 1*{A} \\)

\\( g \circ f = 1*{A} \\)
\\( f \circ g = 1*{A} \\)

## V. X-ideas

\\( X \in \infty \\)

**X** puede ser cualquier ente y de cualquier plano de abstracción.

## VI. Símbolos

```
#X -- identificador
X : -- define una entidad
(A B) -- una aplicación de A en B
(\x => x) -- abstracción anónima
[x..] -- colección de entes tipo x
{A, B, C} -- conjunto de entes
A | B | C -- posibilidad de ser A ó B ó C
```
