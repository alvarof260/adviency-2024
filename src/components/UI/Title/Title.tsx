interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return (
    <h1>{text}</h1>
  )
}
