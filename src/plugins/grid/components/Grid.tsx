import React from 'react'

import '../sass/grid.scss';

export const Container: React.FunctionComponent<ContainerProps> = props => 
  <div className={'grid-container ' + (props.className || '')}>
    {props.children}
  </div>

export const Row: React.FunctionComponent<RowProps> = props =>
  <div className={'grid-row ' + (props.className || '')}>
    {props.children}
  </div>

export const Col: React.FunctionComponent<ColProps> = props =>
  <div className={'grid-col ' + (props.size?.map(s => 'grid-col-'+s.size+'-'+s.col).join(' ') || '') + ' ' + (props.className || '')}>
    {props.children}
  </div>

type ContainerProps = {
  className?: string;
  
}

type RowProps = {
  className?: string;
}

type ColProps = {
  className?: string;
  size?: Array<ColSize>;
}

type ColSize = {
  size: | 'xs'  | 'sm'  | 'md'  | 'lg'  | 'xl';
  col: number;
}