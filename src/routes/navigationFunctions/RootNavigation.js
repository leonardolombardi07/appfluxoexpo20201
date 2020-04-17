import * as React from 'react';

//Permite a navegação sem o objeto navigation
export const navigationRef = React.createRef();
export function navigate (name, params) {
    navigationRef.current?.navigate(name, params);
};