import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type tagProps = {
  children: ReactNode;
};
export default function Tag({ children }: tagProps): JSX.Element {
  return <div>{children}</div>;
}
