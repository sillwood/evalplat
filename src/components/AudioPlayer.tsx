interface Props {
    url: string;
    label: string;
}

export const AudioPlayer = ({ label, url }: Props) => {
    return (
        <figure>
            <figcaption>{label}</figcaption>
            <audio controls src={url} />
        </figure>
    );
};
