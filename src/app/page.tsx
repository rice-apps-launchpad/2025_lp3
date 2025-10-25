'use client'

import { ChangeEvent, useState } from 'react';

const styles = {
  page: {
    height: "100svh",
    width: "100svw",

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  loginCard: {
    width: "480px",
    padding: "24px",
    border: "solid 2px black",
    borderRadius: "8px",

    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    gap: "8px"
  },
  loginTitle: {
    fontSize: "24px",
  },
  loginInput: {
    width: "100%",
    padding: "8px",
    border: "solid 1px black",
    borderRadius: "8px",
    fontSize: "16px"
  },
  loginBtn: {
    width: "100%",
    backgroundColor: "#55AAFF",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  }
};

export default function Home() {
  const [text, setText] = useState('');

  function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleSubmit() {
    // YOUR CODE HERE (the inputted text is in the variable text)
  }

  return (
    <main style={styles.page}>
      <div style={styles.loginCard}>
        <p style={styles.loginTitle}>Login</p>
        <input style={styles.loginInput} placeholder="Input the code" value={text} onChange={handleTextChange} />
        <button className="hover:outline-2" style={styles.loginBtn} onClick={handleSubmit}>Submit</button>
      </div>
    </main>
  );
}
