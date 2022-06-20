import { createSlice  } from "@reduxjs/toolkit";

// //For console.log debuging: you need to write console.log(current.state), but first import:
// import { current } from '@reduxjs/toolkit'; 

export const articalesReducer = createSlice({

    name: 'articales',
    initialState: {
        articalesArray: [
            {
                id: '0',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                readMore: false,
                arrowClicked: false
            },
            {
                id: '1',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                readMore: false,
                arrowClicked: false
            },
            {
                id: '2',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.jhgkhgkhg kokjo jjj jjj kokoo kkkk hgyufuy  cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m",
                readMore: true,
                arrowClicked: false
            },
            {
                id: '3',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                readMore: false,
                arrowClicked: false
            },
            {
                id: '4',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.jhgkhgkhg kokjo jjj jjj kokoo kkkk hgyufuy  cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m",
                readMore: true,
                arrowClicked: false
            },
            {
                id: '5',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                readMore: false,
                arrowClicked: false
            },
            {
                id: '6',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                readMore: false,
                arrowClicked: false
            },
            {
                id: '7',
                articalTitel: 'What are lorem ipsum dolor sit amet lorem ipsum?',
                articalParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.jhgkhgkhg kokjo jjj jjj kokoo kkkk hgyufuy  cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m",
                readMore: true,
                arrowClicked: false
            },
   
        ]
    },
    
    reducers: {
        toggleReadMore: (state,action) => {

            const articalId=action.payload;

            const currentReadMoreValue=state.articalesArray[articalId].readMore;
            state.articalesArray[articalId].readMore = !currentReadMoreValue;

            const currentArrowClickedValue=state.articalesArray[articalId].arrowClicked;
            state.articalesArray[articalId].arrowClicked = !currentArrowClickedValue;

        },
    }

})

export const { toggleReadMore } = articalesReducer.actions;

export default articalesReducer.reducer;
