
type Props = {
    featureItem: FeatureItem;
};

function Item({ featureItem }: Props) {
    return (

        <div>
            <h1>Feature Items</h1>
                <div
                    className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
                >
                    <div className="font-semibold flex items-center justify-between mt-4 mb-1">
                        <p className="w-44 truncate">{featureItem.title}</p>
                        <p>${featureItem.description}</p>
                    </div>
                    <p className="italic text-xs w-64 line-clamp-2 text-gray-600">
                        {featureItem.description}
                    </p>
                </div>
        </div>
    );
}

export default Item;