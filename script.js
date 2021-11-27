//Fun Message
            console.log("**   **  *    *   ******  *******  *       ******  *     *  *       *******  *******  *******  *******");
            console.log("* * * *  *    *   *       *     *  *       *       *     *  *       *     *     *     *     *  *     *");
            console.log("*  *  *  ******   *       *******  *       *       *     *  *       *******     *     *     *  *******");
            console.log("*     *       *   *       *     *  *       *       *     *  *       *     *     *     *     *  * **   ");
            console.log("*     *  ******   ******  *     *  ******  ******  *******  ******  *     *     *     *******  *   ***");

            //Disply Function
            function dis(num) {
                document.getElementById('output').value = document.getElementById('output').value + num;
            }

            //Clear Screen Function
            function clr() {
                document.getElementById('output').value = "";
            }

            //Final Output Function
            function ans() {
                let que = document.getElementById('output').value;
                let evalValue = eval(que);
                document.getElementById('output').value = evalValue;
            }

            //Event Listener for Key Buttons
            document.addEventListener('keydown', keyDown);

            //Function for keyboard use
            function keyDown(e) {
                e.preventDefault();

                //Disply Function
                if (e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9 || e.key == 0 || e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '.5') {
                    document.getElementById('output').value = document.getElementById('output').value + e.key;
                }
                
                //Delte Last Input Function
                if (e.key == 'Backspace') {
                    document.getElementById('output').value = document.getElementById('output').value.slice(0, -1);
                }

                //Clear Screen Function
                if (e.key == 'Delete') {
                    document.getElementById('output').value = "";
                }

                //Final Output Function
                if (e.key == 'Enter') {
                    let que = document.getElementById('output').value;
                    let evalValue = eval(que);
                    document.getElementById('output').value = evalValue;
                }
            }
