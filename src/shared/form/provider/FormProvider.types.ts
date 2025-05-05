import React from "react";

export interface FormProviderProps<T> {
  initialValue: T ;
  children: React.ReactNode;
}
