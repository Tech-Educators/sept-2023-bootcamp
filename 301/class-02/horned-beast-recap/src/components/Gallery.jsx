import HornedBeast from "./HornedBeast"

export default function Gallery(props) {
    console.log(props.beasts)
    return (
        <>
            <h2>Horned Beasts 😎 🐉 </h2>
            {
                props.beasts.map((beast) => {
                    return (
                        <HornedBeast img={beast.image_url} asdfasdf={beast.description} title={beast.title} />
                    )
                })
            }
            {/* 
            <HornedBeast title='Dragoon' something='this is not a valid image link' desc='this is a description'/> */}
        </>
    )
}