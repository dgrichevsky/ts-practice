export interface HeadingProps {
  title: string;
}

export const EvenMoreComponent = ({ title }: HeadingProps) => {
  return <div> {title}</div>;
};

export function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => JSX.Element;
}) {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}> {render(item)}</li>
        ))}
      </ul>
    </div>
  );
}
function TestComponent() {
  return (
    <div>
      <EvenMoreComponent title={"123"}></EvenMoreComponent>
      <List items={["a", "b", "c"]} render={(str) => <div>{str}</div>}></List>
    </div>
  );
}
export default TestComponent;
