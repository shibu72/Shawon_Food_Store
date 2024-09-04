interface MealItem {
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
}

const Products = ({ mealItem }: { mealItem: MealItem }) => {
  const { strMeal, strMealThumb, strCategory } = mealItem;
  
  return (
    <>
      <div className="grid gap-2 w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%]  backdrop-blur-lg shadow-sm shadow-slate-500 rounded-lg p-3">
        <img src={strMealThumb} alt={strMeal} className="rounded-lg object-cover" />
        <div className="">
          <h1 className="flex flex-wrap items-center justify-between">
            <span className="text-xl">{strMeal}</span>
            <span className="text-sm">Category: {strCategory}</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Products;
