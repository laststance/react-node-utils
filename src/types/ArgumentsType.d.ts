declare type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never
