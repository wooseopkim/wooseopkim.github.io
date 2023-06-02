type Subscriber<T> = (value: T) => void;
type Transformer<U, T> = (value: U) => T;

interface AbstractObservable<T> {
  subscribe(f: Subscriber<T>): () => void;
  value: T;
}

export default class Observable<T> implements AbstractObservable<T> {
  #value: T;
  private readonly subscribers = new Set<Subscriber<T>>();

  private constructor(value: T) {
    this.#value = value;
  }

  static of<T>(value: T) {
    return new Observable(value);
  }

  static derive<U, T>(observable: Observable<U>, transform: Transformer<U, T>) {
    return new DerivedObservable(observable, transform);
  }

  subscribe(f: Subscriber<T>) {
    f(this.#value);
    this.subscribers.add(f);
    return () => this.unsubscribe(f);
  }

  unsubscribe(f: Subscriber<T>) {
    return this.subscribers.delete(f);
  }

  update(f: Transformer<T, T>) {
    const value = f(this.#value);
    this.#value = value;
    this.subscribers.forEach((f) => f(value));
  }

  get value() {
    return this.#value;
  }
}

class DerivedObservable<T, U> implements AbstractObservable<T> {
  private readonly upstream: Observable<U>;
  private readonly transform: Transformer<U, T>;

  constructor(observable: Observable<U>, transform: Transformer<U, T>) {
    this.upstream = observable;
    this.transform = transform;
  }

  subscribe(f: Subscriber<T>) {
    const g = (value: U) => f(this.transform(value));
    this.upstream.subscribe(g);
    return () => this.upstream.unsubscribe(g);
  }

  get value() {
    return this.transform(this.upstream.value);
  }
}
