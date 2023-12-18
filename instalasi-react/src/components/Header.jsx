/* eslint-disable react/prop-types */
export default function Header({ author }) {
  return <h1>This is my first React JS {author ? author : "no name"}</h1>;
}