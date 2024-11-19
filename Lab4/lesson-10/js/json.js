/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector('header');
const section = document.querySelector('section');

// STEP 3a: Create the asynchronous function populate()
async function populate(){
    // Introducing JavaScript Object Notation (JSON): https://json.org/
   try{
    // STEP 4: Store the URL of a JSON file in a variable */
    const requestURL = 'js/i-scream.json';
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(requestURL);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const Response = await fetch(request);

    //error handeling in fetching 
    if(!Response.ok){
        throw new Error (`Http erroe! status: $(response.status)`);
    }
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const jsonObj = await response.json();
    // STEP 8: Output the iScream JSON object to the console 
    console.log(jsonObj);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(jsonObj);
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
   }catch (error){

   }

}
// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader() {
    // Create the H1 element
    const h1 = document.createElement('h1');
    h1.textContent = jsonObj.companyName;
    // Grab the company name from the JSON object and use it for the text node
    const para = document.createElement('p');
    para.textContent = `Head Office: ${jsonObj.headOffice} | Established: ${jsonObj.established}`;

    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1);
    header.appendChild(para);
};
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors() {
    // STEP 10c: Attache the JSON topFlavors object to a variable
    //let topFlavors = jsonObj.topFlavors;
    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i ++) {
        // STEP 10e: build HTML elements for the content
        

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        

        // STEP 10g: Build a loop for the ingredients array in the JSON
        
            // add the ingredient to the UL

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        
    };
};
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
