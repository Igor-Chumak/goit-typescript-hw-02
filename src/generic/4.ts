/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

interface ITitle {
  title: string;
}

class Page extends Component<ITitle> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
