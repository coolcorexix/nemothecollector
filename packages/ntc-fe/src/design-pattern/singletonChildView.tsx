import React from 'react';

function ChildView() {
  return <div>Danh sach lop</div>;
}

export class SingletonChildView {
  private static childComponent: React.ReactNode = null;

  static getChildComponent() {
    if (!SingletonChildView.childComponent) {
      SingletonChildView.childComponent = <ChildView />;
    }
    return SingletonChildView.childComponent;
  }

  static closeChildComponent() {
    if (!!SingletonChildView.childComponent) {
      SingletonChildView.childComponent = null;
    }
  }
}
