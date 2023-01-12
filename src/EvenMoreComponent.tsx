import { ReactElement, ReactNode, Requireable } from "react";
import PropTypes from "prop-types"; // ES6

export interface HeadingProps {
  title: string;
}

export const EvenMoreComponent = ({ title }: HeadingProps) => {
  return <div> {title}</div>;
};
export type ListComponent = <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => ReactElement;

export const List: ListComponent = ({ items, render }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}> {render(item)}</li>
        ))}
      </ul>
    </div>
  );
};

function TestComponent() {
  return (
    <div>
      <EvenMoreComponent title={"123"}></EvenMoreComponent>
      <List items={["a", "b", "c"]} render={(str) => <div>{str}</div>}></List>
    </div>
  );
}
export default TestComponent;
