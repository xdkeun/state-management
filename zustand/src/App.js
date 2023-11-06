import create from "zustand";
const useStore = create((set) => ({
  count: 0,
  plus() {
    set((state) => ({ count: state.count + 1 }));
  },
}));
function App() {
  const { count, plus } = useStore();
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          plus();
        }}
      >
        Plus
      </button>
    </div>
  );
}

export default App;
