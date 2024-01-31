import { createUserHandler } from "@/app/api/route";

// const callURL = "/api/";

// export const APICreateUser = async (name, password) => {
//     try {
//         const fetching = await fetch(`${callURL}createUser`, {
//             method: "POST",
//             mode: "cors",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name,
//                 password
//             }),
//         });
//         const response = await fetching.json();
//         return response;
//     } catch (error) {
//         console.error(error);
//     }
// };

export const APICreateUser = async (name, password) => {
    try {
        const fetching = await createUserHandler(
            { 
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    password
                }),
            },
        );
        
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};