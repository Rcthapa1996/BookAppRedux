import {useSelector} from 'react-redux';
export default function CartSummary() {
  const store = useSelector(state=>state.todos);
  console.log("Store: ",store);
  return (
    <span
      style={{
        border: "3px solid green",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      {/* CartSummary */}
      <div>
      {store.map((el)=><div key={el.id}>{el.text}</div>)}
      </div>
    </span>
  );
}
