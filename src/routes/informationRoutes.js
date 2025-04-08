import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
        <html>
            <head>
                <title>Assignment #1 - API Server</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 20px;
                    }
                    .container {
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        width: 90%;
                        max-width: 800px;
                        text-align: center;
                        margin: 0 auto;
                    }
                    h1 {
                        font-size: 26px;
                        color: #333;
                        margin-bottom: 10px;
                    }
                    h2 {
                        font-size: 22px;
                        color: #555;
                        margin-bottom: 10px;
                    }
                    p {
                        font-size: 16px;
                        color: #666;
                        margin-bottom: 15px;
                    }
                    hr {
                        border: 0;
                        height: 1px;
                        background: #ccc;
                        margin: 15px 0;
                    }
                    ul {
                        list-style-type: none;
                        padding: 0;
                        text-align: left;
                        margin-left: 10px;
                    }
                    li {
                        background: #f8f9fa;
                        padding: 12px;
                        margin: 8px 0;
                        border-radius: 5px;
                        font-size: 16px;
                    }
                    .description {
                        display: block;
                        margin-top: 5px;
                        margin-left: 20px;
                        color: #555;
                        font-size: 14px;
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 14px;
                        color: #333;
                    }

                    /* Responsive Design */
                    @media (max-width: 768px) {
                        .container {
                            width: 95%;
                        }
                        h1 {
                            font-size: 24px;
                        }
                        h2 {
                            font-size: 20px;
                        }
                        p {
                            font-size: 14px;
                        }
                        li {
                            font-size: 14px;
                        }
                    }
                    @media (max-width: 480px) {
                        .container {
                            width: 100%;
                            padding: 15px;
                        }
                        h1 {
                            font-size: 22px;
                        }
                        h2 {
                            font-size: 18px;
                        }
                        p {
                            font-size: 13px;
                        }
                        li {
                            font-size: 13px;
                            padding: 10px;
                        }
                        .description {
                            font-size: 12px;
                            margin-left: 15px;
                        }
                    }
                    @media (max-width: 360px) {
                        .container {
                            width: 100%;
                            padding: 10px;
                        }
                        h1 {
                            font-size: 20px;
                        }
                        h2 {
                            font-size: 16px;
                        }
                        p {
                            font-size: 12px;
                        }
                        li {
                            font-size: 12px;
                            padding: 8px;
                        }
                        .description {
                            font-size: 11px;
                            margin-left: 10px;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Assignment #1</h1>
                    <h2>Create an API Server with Node.js</h2>
                    <p>API Server สำหรับให้บริการข้อมูล Drone</p>
                    <hr>
                    <h3>รายละเอียดเพิ่มเติม</h3>
                    <ul>
                        <li><strong>GET :</strong> /configs/:droneId 
                            <span class="description">- ดึงข้อมูลจาก configs จาก Server1 ตาม droneId</span>
                            <span class="description">- Ex. : <a href="https://assignment1-470-371682635124.asia-southeast1.run.app/configs/3001" target="_blank">https://assignment1-470-371682635124.asia-southeast1.run.app/configs/3001</a></li>
                        <li><strong>GET :</strong> /status/:droneId 
                            <span class="description">- ดึงข้อมูลสถานะของ drone จาก Server1 ตาม droneId</span>
                            <span class="description">- Ex. : <a href="https://assignment1-470-371682635124.asia-southeast1.run.app/status/3001" target="_blank">https://assignment1-470-371682635124.asia-southeast1.run.app/status/3001</a></span></li>
                        <li><strong>GET :</strong> /logs/:droneId 
                            <span class="description">- ประวัติ Logs ของ Drone จาก Server 2</span>
                            <span class="description">- Ex. : <a href="https://assignment1-470-371682635124.asia-southeast1.run.app/logs/3001" target="_blank">https://assignment1-470-371682635124.asia-southeast1.run.app/logs/3001</a></span></li>
                        <li><strong>POST :</strong> /logs 
                            <span class="description">- บันทึก Log ใหม่ลงใน Server 2</span></li>
                    </ul>
                    <div class="footer">
                        <br>ธนพนธ์ เป็นสุข | รหัสนักศึกษา 64050470 <br><br>
                        WEB APPLICATION DEVELOPMENT | รหัสวิชา 01236337
                    </div>
                </div>
            </body>
        </html>
    `);
});

export default router;
