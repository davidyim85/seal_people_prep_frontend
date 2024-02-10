import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const person = useLoaderData();

    return (
        <div className="person">
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name} />

            <h2>Update {person.name}</h2>
            <Form action={`/update/${person._id}`} method="post">
                <input type="input" name="name" defaultValue={person.name} placeholder="person's name" />
                <input type="input" name="image" defaultValue={person.image} placeholder="person's picture" />
                <input type="input" name="title" defaultValue={person.title} placeholder="person's title" />
                <input type="submit" value={`update ${person.name}`} />
            </Form>

            <h2>Delete Person</h2>
            <Form action={`/delete/${person._id}`} method="post">
                <input type="submit" value={`delete ${person.name}`} />
            </Form>
        </div>
    );
}

export default Show;