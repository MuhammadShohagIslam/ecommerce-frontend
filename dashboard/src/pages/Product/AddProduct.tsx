import CreateProductForm from "../../components/Organisams/Form/CreateProduct/CreateProductForm";


const AddProduct = () => {
    const [values, setValues] = useState({
        ...initialValues,
        categories: categories,
        colorsData: colorsData,
        sizesData: sizesData,
        brands: brandsData,
    });
    const [subCategories, setSubCategories] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [subCategoryRef, setSubCategoryRef] = useState<any>(null);
    const [colorRef, setColorRef] = useState<any>(null);
    const [sizeRef, setSizeRef] = useState<any>(null);
    const { state } = useStoreContext();
    const { user } = state;

    const handleChangeCategory = (event: any) => {
        setValues({
            ...values,
            subCategory: [],
            category: event.target.value,
        });
        if (event.target.value === "Select Category") {
            setIsShow(false);
        } else {
            console.log(event.target.value, "target");
            subCategoryOnCategory(user!.token, event.target.value)
                .then((res) => {
                    setSubCategories(res.data);
                })
                .catch((error) => {
                    console.log(error);
                    setIsShow(false);
                });
            setIsShow(true);
        }
    };

    const handleAddProduct = (
        data: IFormInput,
        reset: UseFormReset<IFormInput>,
        setValue: UseFormSetValue<IFormInput>
    ) => {
        // setLoading(true);
        let updateSubCategory;
        let updateColors;
        let updateSizes;
        if (
            Array.isArray(data.subCategory) &&
            Array.isArray(data.colors) &&
            Array.isArray(data.sizes)
        ) {
            updateSubCategory = data.subCategory.map(
                (sc: { value: string; label: string }) => sc.value
            );
            updateColors = data.colors.map(
                (c: { value: string; label: string }) => c.value
            );
            updateSizes = data.sizes.map(
                (s: { value: string; label: string }) => s.value
            );
        }
        const updatedValues = {
            ...values,
            subCategory: updateSubCategory,
            title: data.productName,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            colors: updateColors,
            sizes: updateSizes,
            brand: data.brand,
            shipping: data.shipping,
            discount: data.discount,
            category: data.productCategory,
        };
        createProduct(user!.token, updatedValues)
            .then((res) => {
                setLoading(false);
                toast.success(`${res.data.title} Product Created!`);
                subCategoryRef.clearValue();
                sizeRef.clearValue();
                colorRef.clearValue();
                // window.location.reload();
                reset();
                setValues({ ...values, images: [] });
            })
            .catch((error: any) => {
                if (error.response.status === 400) {
                    toast.error(`${error.data.error}`);
                }
                setLoading(false);
            });
    };
    return (
        <div>
            <div className="bg-secondary p-6 rounded-lg">
                <h2 className="text-center font-semibold text-primary text-2xl">
                    Add New Product
                </h2>
                <CreateProductForm
                    handleAddProduct={handleAddProduct}
                    handleChangeCategory={handleChangeCategory}
                    subCategories={subCategories}
                    values={values}
                    setValues={setValues}
                    isShow={isShow}
                    loading={loading}
                    setLoading={setLoading}
                    setSubCategoryRef={setSubCategoryRef}
                    setColorRef={setColorRef}
                    setSizeRef={setSizeRef}
                />
            </div>
        </div>
    );
};

export default AddProduct;