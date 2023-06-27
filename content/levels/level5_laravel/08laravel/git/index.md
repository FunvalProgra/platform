---
title: "Registros Con Livewire / Validaciones Tiempo Real"
date: 2023-03-12T11:50:06-06:00
draft: false
showPagination: false
---
 
# Registros con Livewire y Validaciones en Tiempo Real en Laravel

Introducción:
En Laravel, Livewire ofrece la capacidad de realizar registros en tiempo real y validaciones de formularios sin tener que recargar la página. En esta lección, exploraremos cómo utilizar Livewire para realizar registros de datos y realizar validaciones en tiempo real para proporcionar una mejor experiencia de usuario.

1. Realizar registros con Livewire:
- Paso 1: Asegúrate de tener Livewire correctamente configurado en tu proyecto Laravel siguiendo los pasos de la lección anterior.

- Paso 2: Crea un componente Livewire utilizando el comando `make:livewire` de Artisan. Por ejemplo:
```bash
php artisan make:livewire CreatePost
```
Esto generará un nuevo archivo de componente Livewire en el directorio `app/Http/Livewire`.

- Paso 3: Abre el archivo del componente Livewire y agrega los campos necesarios para el registro en una propiedad pública. Por ejemplo:
```php
public $titulo;
public $contenido;
```

- Paso 4: En el método `render()` del componente, define la vista correspondiente al formulario de registro. Por ejemplo:
```php
public function render()
{
    return view('livewire.create-post');
}
```
Crea la vista `create-post.blade.php` en la ubicación adecuada y define el formulario de registro con los campos correspondientes.

- Paso 5: Dentro del componente Livewire, define un método para manejar la acción de envío del formulario. Por ejemplo:
```php
public function store()
{
    // Lógica para almacenar los datos recibidos en el formulario
}
```
En este método, puedes agregar la lógica necesaria para almacenar los datos recibidos en el formulario en tu base de datos u otro sistema de almacenamiento.

- Paso 6: Dentro de la vista del formulario, utiliza la directiva `wire:submit` para enviar la acción del formulario al método `store()` del componente. Por ejemplo:
```html
<form wire:submit.prevent="store">
    <!-- Campos del formulario -->
    <button type="submit">Enviar</button>
</form>
```
Esto enviará la acción del formulario al método `store()` del componente Livewire cuando se envíe el formulario.

2. Validaciones en tiempo real:
- Paso 1: Dentro del método `store()` del componente Livewire, puedes agregar las validaciones necesarias utilizando las reglas de validación de Laravel. Por ejemplo:
```php
public function store()
{
    $this->validate([
        'titulo' => 'required|max:255',
        'contenido' => 'required',
    ]);

    // Lógica para almacenar los datos recibidos en el formulario
}
```
Aquí, se aplican las reglas de validación necesarias para los campos del formulario.

- Paso 2: Para mostrar los mensajes de error en tiempo real, puedes utilizar la directiva `@error` en la vista del formulario. Por ejemplo:
```html
<input type="text" wire:model="titulo">
@error('titulo') <span class="error">{{ $message }}</span> @enderror

<textarea wire:model="contenido"></textarea>
@error('contenido') <span class="error">{{ $message }}</span> @enderror
```
Esto mostrará los mensajes de error correspondientes junto a los campos del formulario cuando ocurran errores de validación.

- Paso 3: Puedes utilizar el modificador `.lazy` al vincular los campos del formulario con las propiedades del componente Livewire para retrasar la

 actualización en tiempo real hasta que se realice una acción específica, como hacer clic en el botón de enviar. Por ejemplo:
```html
<input type="text" wire:model.lazy="titulo">
<textarea wire:model.lazy="contenido"></textarea>
```
Esto evita que se realicen validaciones en tiempo real hasta que el usuario intente enviar el formulario.

Conclusión:
Utilizando Livewire en Laravel, puedes realizar registros en tiempo real y realizar validaciones de formularios sin tener que recargar la página. Al crear componentes Livewire, definir propiedades para los campos del formulario, aplicar validaciones y utilizar directivas de Livewire en las vistas, puedes proporcionar una experiencia de usuario fluida y mejorar la eficiencia en el manejo de registros y validaciones en tu aplicación Laravel.

#  Registros con Livewire 
{{< youtube  VVY5RVdpFco >}}
# Validaciones en Tiempo Real en Laravel
 {{< youtube  P4ehlI6btNQ >}}