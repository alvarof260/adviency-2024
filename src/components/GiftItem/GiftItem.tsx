interface Props {
  name: string;
}

export const GiftItem = ({ name }: Props) => {
  return (
    <li>{name}</li>
  )
}
