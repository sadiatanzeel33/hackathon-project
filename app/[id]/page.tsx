type Props = {
    params: { id: string };
  };
  
  export default function ContactPage({ params }: Props) {
    const { id } = params;
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold">{id}</h1>
        <p> {id} </p>
      </div>
    );
  }
  