declare module kotlin {
  export module jvm {
    export module functions {
      export class Function0 {
        public static class: java.lang.Class<kotlin.jvm.functions.Function0>;
        /**
         * Constructs a new instance of the kotlin.jvm.functions.Function0 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          invoke(): void;
        });
        public constructor();
        public invoke(): void;
      }

      export class Function1<A> {
        public static class: java.lang.Class<kotlin.jvm.functions.Function1>;
        /**
         * Constructs a new instance of the kotlin.jvm.functions.Function1 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          invoke(param0: A): void;
        });
        public constructor();
        public invoke(param0: A): void;
      }

      export class Function2<A,B> {
        public static class: java.lang.Class<kotlin.jvm.functions.Function2>;
        /**
         * Constructs a new instance of the kotlin.jvm.functions.Function2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          invoke(param0: A, param1: B): void;
        });
        public constructor();
        public invoke(param0: A, param1: B): void;
      }
    }
  }
}
