import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            description : "Transform your kitchen into a pizzeria with our Chicken Pan Pizza recipes. From crispy crusts to savory toppings, this collection guides you through crafting delicious pan pizzas that will satisfy your cravings for cheesy, flavorful goodness."
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            description : "Dive into the heart of Italian comfort food with our Spaghetti and Meatballs recipes. From homemade meatballs to rich tomato sauce, master the art of creating this timeless dish that's perfect for family dinners and gatherings."
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            description : " Elevate your burger game with this collection of mouthwatering American cheeseburger recipes. From juicy patties to gourmet toppings, discover how to create the perfect blend of flavors for a classic taste of the USA."
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            description : "Uncover the secrets of a classic South Asian dish with our Mutton Biryani recipes. Learn the art of layering fragrant basmati rice with succulent mutton and aromatic spices, creating a symphony of flavors in every bite."
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            description : "Immerse yourself in the precision and beauty of Japanese sushi-making. From classic nigiri to vibrant maki rolls, this recipe book guides you through the art of crafting exquisite sushi, bringing the flavors of Japan to your home kitchen."
        },
        {
            title: "Vegetarian Quinoa Salad",
            image: "/img/gallery/img_12.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            description : "Fresh and nutritious, this Vegetarian Quinoa Salad is packed with colorful vegetables, protein-rich quinoa, and a zesty lemon vinaigrette. It's a light and satisfying dish perfect for a quick lunch or a side at dinner."
        }, 
        {
            title: "Spicy Shrimp Tacos",
            image: "/img/gallery/img_13.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            description : " Heat up your taste buds with our Spicy Shrimp Taco recipes. Dive into a quick and flavorful fiesta, where succulent shrimp meets bold spices, creating the perfect bite-sized sensation. Perfect for a zesty and satisfying meal in minutes"
        },
        {
            title: "Chicken Tikka Masala",
            image: "/img/gallery/img_11.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            description : "A popular Indian dish with tender pieces of marinated and grilled chicken served in a creamy tomato-based sauce. It's rich, flavorful, and perfect when paired with naan or rice."
        },
        {
            title: "Chicken Alfredo Pasta",
            image: "/img/gallery/img_14.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            description : "Creamy and indulgent, Chicken Alfredo Pasta is a classic Italian-American dish. Tender chicken breast is cooked in a rich Alfredo sauce made with butter, heavy cream, and Parmesan cheese. Tossed with fettuccine pasta, this dish is a comforting and satisfying meal."
        },
        {
            title: "Beef and Vegetable Stir-Fry",
            image: "/img/gallery/img_15.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            description : "A quick and flavorful stir-fry is a go-to option for busy weeknights. This Beef and Vegetable Stir-Fry combines thinly sliced beef with a colorful array of vegetables in a savory soy-ginger sauce. Served over rice, it's a delicious and satisfying meal."
        },
        {
            title: "Mushroom Risotto",
            image: "/img/gallery/img_16.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            description : "Creamy and comforting Mushroom Risotto is a classic Italian dish that highlights the earthy flavor of mushrooms. Arborio rice is cooked slowly with mushrooms, onions, and broth until it reaches a rich and velvety consistency."
        },
        {
            title: "Vegetable Coconut Curry",
            image: "/img/gallery/img_17.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            description : " Vegetable Coconut Curry is a vibrant and aromatic dish that brings together a variety of vegetables in a luscious coconut milk-based curry sauce. Infused with curry spices and served over rice or noodles, it's a hearty and satisfying vegetarian meal."
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}