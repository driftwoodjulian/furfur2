
class retriever {
    constructor( locationInput) {
        this.input = locationInput;
    }

    async retrieve(){

                showAlert("Se esta buscando informacion relevante", "warning")
                
                let classy= new classifier(this.input)
                let thing= await classy.classify()
                
                showAlert("Prensentando informacion persivida", "warning")
                const list = document.querySelector("#climate-list");//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<here we add the rult of the fecth
                const row = document.createElement("tr");

                row.innerHTML =`
                <td>${thing[0]}</td>
                <td>${thing[1]}</td>
                <td>${thing[2]}</td>
                <td>${thing[3]}</td>
                <td>${thing[4]}</td>
                <td>${thing[5]}</td>
                      <td>
                            
                            <a href="#" class="btn btn-warning delete">Delete</a>
                      </td>`;

                list.appendChild(row);
                //selectedRow= null;
                showAlert("Se obtuvieron datos del clima, si no se hallo la ciudad que menciono se agragaran los datos de su localizacion de", "success");
    };







    async p_retrieve(){//"p" is for post production
        showAlert("Felicidades presionastes un boton, el FBI tocara a tu puerta en segundos", "warning");
         //this is originaly created as a diferent class but in future it will be an extention of the retriever class
         // actually I later realized that the extension was over the top and all I really needed was to add another
         // method to the retriever class
        
       



        //let p_thing= ["you", "lazy", "fucking","asshole", "bastard", "killed Keny"];

        showAlert("Prensentando informacion persivida para el vago", "warning");
        const list = document.querySelector("#climate-list");//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<here we add the rult of the fecth
        const row = document.createElement("tr");

        let classy= new classifier(this.input)
        let p_thing= await classy.p_classify()

        row.innerHTML =`
            <td>${p_thing[0]}
                    <p>${p_thing[1]}</p>
                    <p>${p_thing[2]}</p>
                    
            
            </td>
            <td>${p_thing[3]}</td>
            <td>${p_thing[4]}</td>
            <td>${p_thing[5]}</td>
            <td>${p_thing[6]}</td>
            <td>${p_thing[7]}</td>
            <td><a href="#" class="btn btn-warning delete">Delete</a></td>`;

            list.appendChild(row);
            //selectedRow= null;
            showAlert("Se obtuvieron datos del clima, si no se hallo la ciudad que menciono se agragaran los datos de su localizacion de", "success");
    };

}
