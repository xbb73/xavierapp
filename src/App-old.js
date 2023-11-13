import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Flex,
  Link,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut, user }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
      author: user.attributes.email
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }
  

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <h1 style={{'color':'red'}}> My Notes App</h1>
      <ul>
        <li>my</li>
        <li>bullet</li>
        <li>list</li>
      </ul>
      <a href="tryme.html">
        <button>Food Page</button>
      </a>
      <a href="quote1.html">
        <button>Quote Page</button>
      </a>
      <a href="headrick.html">
        <button>Test Page</button>
      </a>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Name"
            label="Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="URL"
            label="URL"
            labelHidden
            variation="quiet"
            required
          />
          <View
          name="image"
          as="input"
          type="file"
          style={{ alignSelf: "end" }}
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
      <Table><TableBody>{notes.map((note) => (
  
    <TableRow key={note.id || note.name}>
      <TableCell>
  
    <Text as="span">{note.author.substring(0,note.author.indexOf("@"))}
    </Text></TableCell><TableCell><Link
    href={note.description}
    color="#007EB9"
    isExternal={true}>
      {note.name}
    </Link></TableCell><TableCell>
    
    {note.image && (
      <Image
        src={note.image}
        alt={`visual aid for ${notes.name}`}
        style={{ width: 400 }}
      />
    )}</TableCell><TableCell>
    <Button variation="link" onClick={() => deleteNote(note)}>
      Delete note
    </Button>
    </TableCell></TableRow>
))} </TableBody></Table>
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);