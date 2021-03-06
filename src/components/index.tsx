import React, {
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode,
  VFC,
} from 'react';

// common
export type TextInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const TextInput: VFC<TextInputProps> = (props) => {
  return (
    <input
      type="text"
      className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none"
      {...props}
    />
  );
};

// common
export type ListGroupProps = {
  children: ReactNode;
};

export const ListGroup: VFC<ListGroupProps> = ({ children }) => {
  return (
    <div className="flex flex-col border rounded-t rounded-b">{children}</div>
  );
};

// common
export type ListItemProps = {
  children: ReactNode;
};

export const ListItem: VFC<ListItemProps> = ({ children }) => {
  return (
    <div className="w-full px-4 py-2 border-b last:border-b-0">{children}</div>
  );
};

// common
export type IconButtonProps = {
  onClick: MouseEventHandler;
  children: ReactNode;
};

export const IconButton: VFC<IconButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="p-1 rounded text-gray-800 hover:bg-gray-100"
      // onClick={onClick}
    >
      {children}
    </button>
  );
};
