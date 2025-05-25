interface ButtonProps {
    text: string;
}

export default function ButtonCustom({ text }: ButtonProps) {
    return (
        <div className="">
            <button>{text}</button>
            <button>{text}</button>
            <button>{text}</button>
            <button>{text}</button>
        </div>
    )
}