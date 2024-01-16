        const canvas = document.getElementById("space");
        const ctx = canvas.getContext("2d");
        const gridSizeInput = document.getElementById("gridSize");
        const colorPicker = document.getElementById("colorPicker");
        
        let gridSize = parseInt(gridSizeInput.value);
        let isDrawing = false;
        let isErasing = false;

        drawGrid();

        canvas.addEventListener("mousedown", startDrawing);
        canvas.addEventListener("mouseup", stopDrawing);
        canvas.addEventListener("mousemove", draw);

        function drawGrid() {
            const cellSize = canvas.width / gridSize;
            ctx.beginPath();
            for (let i = 1; i < gridSize; i++) {
                const lineX = i * cellSize;
                ctx.moveTo(lineX, 0); 
                ctx.lineTo(lineX, canvas.height);

                const lineY = i * cellSize;
                ctx.moveTo(0, lineY);
                ctx.lineTo(canvas.width, lineY);
            }
            ctx.stroke();
        }

        function startDrawing(e) {
            isDrawing = true;
            draw(e);
            
        }

        function stopDrawing() {
            isDrawing = false;
            ctx.beginPath();
        }

        function draw(e) {
            if (!isDrawing) return;

            const cellSize = canvas.width / gridSize;
            const x = Math.floor((e.clientX - canvas.offsetLeft) / cellSize) * cellSize;
            const y = Math.floor((e.clientY - canvas.offsetTop) / cellSize) * cellSize;

            ctx.fillStyle = isErasing ? "#EEF0E5" : colorPicker.value;
            ctx.fillRect(x, y, cellSize, cellSize);
        }

        function updateGridSize() {
            gridSize = parseInt(gridSizeInput.value);
            clearCanvas();
            drawGrid();
        }

        function updateColor() {
            ctx.fillStyle = colorPicker.value;
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGrid();
        }

        function toggleErase() {
            isErasing = !isErasing;
        }