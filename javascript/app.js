// Contents of menu to be swapped out based on section desired
const menu_items = [3];
const photo_array = [3];

photo_array[0] = `
            
                <img src="./img/marc-babin-626525-unsplash.jpg" alt="" srcset="" class="img">
            
`;

photo_array[1] = `
            
                <img src="./img/mantra-media-58090-unsplash.jpg" alt="" srcset="" class="img">
            
`;

photo_array[2] = `
            
                <img src="./img/louis-hansel-1418450-unsplash.jpg" alt="" srcset="" class="img">
            
`;

menu_items[0] = `
            <h3 class="dish_title py-10 my-20">Wild Boar Burger</h3>
            <p class="dish_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis doloribus eligendi cum non mollitia aspernatur 
                ipsam placeat voluptatibus excepturi. Suscipit repellendus asperiores similique eveniet architecto voluptates voluptatibus corrupti 
                aspernatur nesciunt, ut reiciendis sequi amet autem dolorem ad expedita nemo nisi voluptatum! lorem
                Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis doloribus eligendi cum non mollitia aspernatur
            </p>
            <h3 class="dish_title py-10 my-20">Chef Special</h3>
            <p class="dish_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis doloribus eligendi cum non mollitia aspernatur 
                ipsam placeat voluptatibus excepturi. Suscipit repellendus asperiores similique eveniet architecto voluptates voluptatibus corrupti 
                aspernatur nesciunt, ut reiciendis sequi amet autem dolorem ad expedita nemo nisi voluptatum!  Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis 
                doloribus eligendi cum non mollitia aspernatur
            </p>
            <h3 class="dish_title py-10 my-20">Spring Rolls</h3>
            <p class="dish_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis doloribus eligendi cum non mollitia aspernatur 
                ipsam placeat voluptatibus excepturi. Suscipit repellendus asperiores similique eveniet architecto voluptates voluptatibus corrupti 
                aspernatur nesciunt, ut reiciendis sequi amet autem dolorem ad expedita nemo nisi voluptatum!  Exercitationem aliquam, alias rem minus atque maxime 
                veniam eum nobis doloribus eligendi cum non mollitia aspernatur
            </p>
`;

menu_items[1] = `
            <h3 class="dish_title py-10 my-20">Bruschetta Board</h3>
            <p class="dish_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis doloribus eligendi cum non mollitia aspernatur 
                ipsam placeat voluptatibus excepturi. Suscipit repellendus asperiores similique eveniet architecto voluptates voluptatibus corrupti 
                aspernatur nesciunt, ut reiciendis sequi amet autem dolorem ad expedita nemo nisi voluptatum!
            </p>
            <h3 class="dish_title py-10 my-20">charcuterie Platter</h3>
            <p class="dish_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis doloribus eligendi cum non mollitia aspernatur 
                ipsam placeat voluptatibus excepturi. Suscipit repellendus asperiores similique eveniet architecto voluptates voluptatibus corrupti 
                aspernatur nesciunt, ut reiciendis sequi amet autem dolorem ad expedita nemo nisi voluptatum!
            </p>
            <h3 class="dish_title py-10 my-20">Spring Rolls</h3>
            <p class="dish_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis doloribus eligendi cum non mollitia aspernatur 
                ipsam placeat voluptatibus excepturi. Suscipit repellendus asperiores similique eveniet architecto voluptates voluptatibus corrupti 
                aspernatur nesciunt, ut reiciendis sequi amet autem dolorem ad expedita nemo nisi voluptatum!
            </p>
`;

menu_items[2] = `
            <h3 class="dish_title py-10 my-20">Creme Brule</h3>
            <p class="dish_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis doloribus eligendi cum non mollitia aspernatur 
                ipsam placeat voluptatibus excepturi. Suscipit repellendus asperiores similique eveniet architecto voluptates voluptatibus corrupti 
                aspernatur nesciunt, ut reiciendis sequi amet autem dolorem ad expedita nemo nisi voluptatum!
            </p>
            <h3 class="dish_title py-10 my-20">Fried Ice Cream</h3>
            <p class="dish_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis doloribus eligendi cum non mollitia aspernatur 
                ipsam placeat voluptatibus excepturi. Suscipit repellendus asperiores similique eveniet architecto voluptates voluptatibus corrupti 
                aspernatur nesciunt, ut reiciendis sequi amet autem dolorem ad expedita nemo nisi voluptatum!
            </p>
            <h3 class="dish_title py-10 my-20">Tiramisu</h3>
            <p class="dish_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem aliquam, alias rem minus atque maxime veniam eum nobis doloribus eligendi cum non mollitia aspernatur 
                ipsam placeat voluptatibus excepturi. Suscipit repellendus asperiores similique eveniet architecto voluptates voluptatibus corrupti 
                aspernatur nesciunt, ut reiciendis sequi amet autem dolorem ad expedita nemo nisi voluptatum!
            </p>
`;

function swap_menu_items(object){
    let section = object.text;
    let menu = document.querySelector(".menu_items");
    let photo = document.querySelector(".photo_box");

    if (section === "Appatizers"){
        console.log("a");
        menu.innerHTML = menu_items[1];
        photo.innerHTML = photo_array[0];
    } 
    else if (section === "Entrees"){
        console.log("b");
        menu.innerHTML = menu_items[0];
        photo.innerHTML = photo_array[1];
    }
    else if (section === "Dessert"){
        console.log("c");
        menu.innerHTML = menu_items[2];
        photo.innerHTML = photo_array[2];
    }
}