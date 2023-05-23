---
title: "Components & Props"
date: 2023-03-12T11:45:29-06:00
draft: false
showPagination: false
---
# Components & Props

## Un componente simple

Los componentes de React implementan un método llamado render() que recibe datos de entrada y retorna qué mostrar. Este ejemplo utiliza una sintaxis similar a XML llamada JSX. Puedes acceder a los datos de entrada que se pasan al componente mediante render() a través de this.props.

JSX es opcional y no es requerido para usar React. Prueba Babel REPL para ver el código JavaScript sin procesar la compilación de JSX.
```js
class HelloMessage extends React.Component {
  render() {
    return <div>Hola {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);
```
Resultado:

        Hola Taylor

## Un componente con estado

Además de obtener datos de entrada (a los que accedes a través de this.props), un componente puede tener datos en su estado interno (a los que accedes a través de this.state). Cuando los datos del estado de un componente cambian, se vuelve a invocar render con los nuevos valores en this.state.

```js
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Segundos: {this.state.seconds}
      </div>
    );
  }
}

root.render(<Timer />);
```

Resultado:

        Segundos: 5980


## Una aplicación

Usando props y state, podemos integrar todo en una pequeña aplicación de tareas pendientes. Este ejemplo usa state para tener un control de la lista actual de objetos así como el texto que el usuario ha ingresado. A pesar de que los manejadores de eventos parecen ser renderizados en línea, serán recolectados e implementados usando delegación de eventos.

```js
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Tareas pendientes</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            ¿Qué se necesita hacer?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Añadir #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

root.render(<TodoApp />);
```
## Un componente usando plugins externos

React permite interactuar con otras bibliotecas y frameworks. Este ejemplo usa remarkable, una biblioteca externa de Markdown, que convierte los valores de < textarea > en tiempo real.

```js
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '¡Hola **mundo**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Entrada</h3>
        <label htmlFor="markdown-content">
          Introduce algún texto en markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Salida</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

root.render(<MarkdownEditor />);
  ```

## COMPONENTES
{{< youtube P6PGkIXZQS4>}}

## PROPS
{{< youtube SxK_pgoticY>}}