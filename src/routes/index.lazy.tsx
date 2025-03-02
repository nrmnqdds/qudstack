import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: IndexPage,
});

type Todos = {
	userId: 1;
	id: 1;
	title: "delectus aut autem";
	completed: false;
};

function IndexPage() {
	const { data, isLoading, isError } = useQuery<Array<Todos>>({
		queryKey: ["todos"],
		queryFn: async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/todos");
			const json = await res.json();

			console.log(json);
			return json;
		},
	});
	return (
		<div className="">
			<h3 className="text-red-500">Welcome Home!</h3>

			{isLoading && <div>Loading...</div>}
			{isError && <div>Error!</div>}
			{data && (
				<div>
					{data.map((todo) => (
						<div key={todo.id}>{todo.title}</div>
					))}
				</div>
			)}
		</div>
	);
}
