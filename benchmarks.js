(()=>{
const benchmarks = [
  {
    "id": "robotwin",
    "title": "RoboTwin 2.0",
    "source": "Table 3",
    "description": "Trained on Clean + Randomized demonstrations.",
    "rows": [
      {
        "name": "WorldBridge",
        "values": [
          96.16,
          96.3,
          96.23,
          88.3,
          73.4,
          80.9
        ]
      },
      {
        "name": "Kairos",
        "values": [
          96.9,
          95.2,
          96.05,
          null,
          null,
          null
        ]
      },
      {
        "name": "MotuBrain",
        "values": [
          95.8,
          96.08,
          95.94,
          null,
          null,
          null
        ]
      },
      {
        "name": "Long-WAM (IDM)",
        "values": [
          94.7,
          94.2,
          94.4,
          null,
          null,
          null
        ]
      },
      {
        "name": "Qwen-RobotManip",
        "values": [
          93.7,
          94.0,
          93.85,
          null,
          null,
          null
        ]
      },
      {
        "name": "LingBot-VA 2.0",
        "values": [
          93.8,
          93.4,
          93.6,
          null,
          null,
          null
        ]
      },
      {
        "name": "OpenWAM-α",
        "values": [
          93.74,
          93.46,
          93.6,
          89.4,
          48.7,
          69.0
        ]
      },
      {
        "name": "GalaxeaVLA (G0.5)",
        "values": [
          93.7,
          92.8,
          93.3,
          null,
          null,
          null
        ]
      },
      {
        "name": "InternVLA-A1.5",
        "values": [
          93.3,
          93.0,
          93.2,
          null,
          null,
          null
        ]
      },
      {
        "name": "AHA-WAM",
        "values": [
          93.4,
          92.2,
          92.8,
          64.3,
          3.2,
          33.8
        ]
      },
      {
        "name": "LingBot-VA",
        "values": [
          92.93,
          91.55,
          92.24,
          80.7,
          34.6,
          57.7
        ]
      },
      {
        "name": "Fast-WAM",
        "values": [
          91.88,
          91.78,
          91.83,
          77.8,
          1.9,
          39.9
        ]
      },
      {
        "name": "4D-WAM",
        "values": [
          91.92,
          90.76,
          91.34,
          81.5,
          41.8,
          61.7
        ]
      },
      {
        "name": "ACE-Ego-0",
        "values": [
          91.12,
          90.62,
          90.87,
          null,
          null,
          null
        ]
      },
      {
        "name": "Hy-Embodied-0.5-VLA",
        "values": [
          90.9,
          90.1,
          90.5,
          null,
          null,
          null
        ]
      },
      {
        "name": "X-WAM",
        "values": [
          89.8,
          90.7,
          90.25,
          70.0,
          25.8,
          47.9
        ]
      },
      {
        "name": "Being-H0.7",
        "values": [
          90.2,
          89.6,
          89.9,
          null,
          null,
          null
        ]
      },
      {
        "name": "JoyAI-RA 0.1",
        "values": [
          90.48,
          89.28,
          89.88,
          null,
          null,
          null
        ]
      },
      {
        "name": "StarVLA-π",
        "values": [
          88.1,
          88.8,
          88.45,
          null,
          null,
          null
        ]
      },
      {
        "name": "StarVLA-OFT",
        "values": [
          88.2,
          88.3,
          88.25,
          null,
          null,
          null
        ]
      },
      {
        "name": "StarVLA-GR00T",
        "values": [
          88.0,
          88.5,
          88.25,
          null,
          null,
          null
        ]
      },
      {
        "name": "Motus",
        "values": [
          88.66,
          87.02,
          87.84,
          null,
          null,
          null
        ]
      },
      {
        "name": "Qwen-VLA",
        "values": [
          86.1,
          87.2,
          86.65,
          null,
          null,
          null
        ]
      },
      {
        "name": "ABot-M0",
        "values": [
          86.06,
          85.08,
          85.57,
          70.7,
          36.0,
          53.4
        ]
      }
    ],
    "metrics": [
      {
        "label": "Average success rate",
        "index": 2,
        "decimals": 2,
        "unit": "%"
      },
      {
        "label": "Clean success rate",
        "index": 0,
        "decimals": 2,
        "unit": "%"
      },
      {
        "label": "Randomized success rate",
        "index": 1,
        "decimals": 2,
        "unit": "%"
      }
    ],
    "defaultMetric": 0
  },
  {
    "id": "robotwin-c2r",
    "title": "RoboTwin 2.0 · Clean-to-Random",
    "source": "Table 3",
    "description": "Trained on Clean demonstrations only; evaluated on both scene conditions.",
    "rows": [
      {
        "name": "WorldBridge",
        "values": [
          96.16,
          96.3,
          96.23,
          88.3,
          73.4,
          80.9
        ]
      },
      {
        "name": "Qwen-RobotManip-Context",
        "values": [
          null,
          null,
          null,
          84.7,
          69.4,
          77.1
        ]
      },
      {
        "name": "OpenWAM-α",
        "values": [
          93.74,
          93.46,
          93.6,
          89.4,
          48.7,
          69.0
        ]
      },
      {
        "name": "GigaBrain-0.7",
        "values": [
          null,
          null,
          null,
          66.8,
          67.9,
          67.4
        ]
      },
      {
        "name": "4D-WAM",
        "values": [
          91.92,
          90.76,
          91.34,
          81.5,
          41.8,
          61.7
        ]
      },
      {
        "name": "π0.5",
        "values": [
          82.74,
          76.76,
          79.75,
          73.1,
          47.9,
          60.5
        ]
      },
      {
        "name": "LingBot-VA",
        "values": [
          92.93,
          91.55,
          92.24,
          80.7,
          34.6,
          57.7
        ]
      },
      {
        "name": "ABot-M0",
        "values": [
          86.06,
          85.08,
          85.57,
          70.7,
          36.0,
          53.4
        ]
      },
      {
        "name": "Spatial Forcing",
        "values": [
          null,
          null,
          null,
          77.2,
          26.7,
          52.0
        ]
      },
      {
        "name": "X-WAM",
        "values": [
          89.8,
          90.7,
          90.25,
          70.0,
          25.8,
          47.9
        ]
      },
      {
        "name": "Xiaomi-Robotics-0",
        "values": [
          null,
          null,
          null,
          62.9,
          18.2,
          40.6
        ]
      },
      {
        "name": "Fast-WAM",
        "values": [
          91.88,
          91.78,
          91.83,
          77.8,
          1.9,
          39.9
        ]
      }
    ],
    "metrics": [
      {
        "label": "Average success rate",
        "index": 5,
        "decimals": 1,
        "unit": "%"
      },
      {
        "label": "Clean success rate",
        "index": 3,
        "decimals": 1,
        "unit": "%"
      },
      {
        "label": "Randomized success rate",
        "index": 4,
        "decimals": 1,
        "unit": "%"
      }
    ],
    "defaultMetric": 0
  },
  {
    "id": "robocasa",
    "title": "RoboCasa GR1 TableTop",
    "source": "Table 4",
    "description": "TableTop manipulation success rate.",
    "rows": [
      {
        "name": "WorldBridge",
        "values": [
          82.8,
          83.0,
          57.6,
          64.6,
          95.8,
          83.3,
          91.7,
          66.7,
          84.4
        ]
      },
      {
        "name": "Long-WAM",
        "values": [
          78.7,
          null,
          34.9,
          45.1,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "ACE-Ego-0",
        "values": [
          72.8,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "DIAL",
        "values": [
          70.2,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "JoyAI-RA 0.1",
        "values": [
          63.2,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "OpenWAM-α",
        "values": [
          60.5,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "ABot-M0",
        "values": [
          58.3,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "StarVLA",
        "values": [
          57.3,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "Qwen-VLA-Instruct",
        "values": [
          56.7,
          null,
          26.6,
          39.5,
          null,
          null,
          null,
          null,
          73.7
        ]
      },
      {
        "name": "StarVLA-OFT",
        "values": [
          53.8,
          null,
          10.9,
          30.5,
          90.3,
          38.5,
          29.7,
          100.0,
          64.6
        ]
      },
      {
        "name": "StarVLA-GR00T",
        "values": [
          52.8,
          null,
          null,
          null,
          83.0,
          59.4,
          18.8,
          100.0,
          65.3
        ]
      },
      {
        "name": "Being-H0.7",
        "values": [
          49.2,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      }
    ],
    "metrics": [
      {
        "label": "Success rate",
        "index": 0,
        "decimals": 1,
        "unit": "%"
      }
    ],
    "defaultMetric": 0
  },
  {
    "id": "robodojo",
    "title": "RoboDojo",
    "source": "Table 5",
    "description": "Averages over five capability dimensions; score and success rate are separate metrics.",
    "rows": [
      {
        "name": "WorldBridge",
        "values": [
          36.38,
          28.0,
          9.97,
          4.0,
          35.85,
          26.5,
          37.29,
          20.5,
          31.35,
          31.0,
          2.5,
          1.75,
          26.03,
          19.15
        ]
      },
      {
        "name": "DM0.5",
        "values": [
          23.49,
          17.89,
          8.06,
          4.0,
          24.82,
          16.75,
          33.7,
          19.5,
          47.74,
          47.44,
          2.43,
          2.08,
          24.9,
          19.34
        ]
      },
      {
        "name": "GalaxeaVLA (G0.5)",
        "values": [
          27.72,
          21.44,
          9.2,
          4.22,
          28.25,
          20.42,
          44.12,
          32.25,
          8.61,
          7.33,
          1.73,
          1.58,
          20.23,
          14.88
        ]
      },
      {
        "name": "Xiaomi-Robotics-1",
        "values": [
          35.65,
          28.0,
          11.44,
          6.0,
          26.69,
          18.83,
          38.39,
          23.67,
          7.81,
          6.56,
          3.94,
          3.58,
          20.07,
          13.93
        ]
      },
      {
        "name": "OpenWAM-α",
        "values": [
          33.16,
          25.56,
          8.26,
          4.11,
          18.45,
          9.25,
          34.93,
          25.33,
          10.41,
          9.11,
          1.41,
          1.08,
          17.18,
          11.92
        ]
      },
      {
        "name": "Hy-Embodied-0.5-VLA",
        "values": [
          21.98,
          16.56,
          1.57,
          0.22,
          13.81,
          8.0,
          25.74,
          14.92,
          13.37,
          12.11,
          0.65,
          0.58,
          13.07,
          8.8
        ]
      },
      {
        "name": "Spatial Forcing",
        "values": [
          21.25,
          14.89,
          6.98,
          3.78,
          17.32,
          10.58,
          23.26,
          14.58,
          5.43,
          4.11,
          1.78,
          1.58,
          12.38,
          8.04
        ]
      },
      {
        "name": "π0.5",
        "values": [
          20.93,
          14.89,
          5.82,
          1.44,
          12.4,
          5.5,
          23.54,
          14.67,
          5.78,
          4.56,
          1.98,
          1.67,
          11.41,
          6.91
        ]
      },
      {
        "name": "InternVLA-A1.5",
        "values": [
          16.81,
          11.78,
          3.9,
          1.89,
          15.23,
          10.17,
          23.8,
          13.75,
          4.93,
          3.56,
          1.43,
          1.42,
          11.15,
          7.14
        ]
      },
      {
        "name": "StarVLA-PI_v3",
        "values": [
          19.08,
          14.44,
          3.36,
          1.67,
          17.77,
          12.5,
          18.46,
          11.0,
          4.59,
          4.0,
          2.03,
          2.0,
          10.81,
          7.51
        ]
      },
      {
        "name": "StarVLA-GR00T",
        "values": [
          13.94,
          9.56,
          1.97,
          1.0,
          9.56,
          4.67,
          16.18,
          7.17,
          5.6,
          4.33,
          1.95,
          1.92,
          8.25,
          4.67
        ]
      },
      {
        "name": "StarVLA-OFT",
        "values": [
          13.42,
          9.0,
          1.39,
          0.56,
          16.08,
          10.17,
          14.28,
          6.17,
          1.74,
          1.67,
          1.41,
          1.33,
          8.18,
          4.82
        ]
      }
    ],
    "metrics": [
      {
        "label": "Average score",
        "index": 12,
        "decimals": 2,
        "unit": ""
      },
      {
        "label": "Average success rate",
        "index": 13,
        "decimals": 2,
        "unit": "%"
      }
    ],
    "defaultMetric": 0
  },
  {
    "id": "domino",
    "title": "DOMINO · Level-1",
    "source": "Table 4",
    "description": "Dynamic manipulation; averaged over Clean and Randomized configurations.",
    "rows": [
      {
        "name": "WorldBridge",
        "values": [
          82.8,
          83.0,
          57.6,
          64.6,
          95.8,
          83.3,
          91.7,
          66.7,
          84.4
        ]
      },
      {
        "name": "DynamicWAM",
        "values": [
          null,
          null,
          38.2,
          53.2,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "Long-WAM",
        "values": [
          78.7,
          null,
          34.9,
          45.1,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "InternVLA-A1.5",
        "values": [
          null,
          null,
          29.3,
          42.5,
          92.4,
          85.4,
          69.5,
          75.7,
          80.8
        ]
      },
      {
        "name": "Qwen-VLA-Instruct",
        "values": [
          56.7,
          null,
          26.6,
          39.5,
          null,
          null,
          null,
          null,
          73.7
        ]
      },
      {
        "name": "LingBot-VA",
        "values": [
          null,
          78.2,
          24.1,
          36.1,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "Fast-WAM",
        "values": [
          null,
          5.9,
          19.9,
          33.3,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "PUMA",
        "values": [
          null,
          null,
          17.2,
          35.0,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "StarVLA-OFT",
        "values": [
          53.8,
          null,
          10.9,
          30.5,
          90.3,
          38.5,
          29.7,
          100.0,
          64.6
        ]
      },
      {
        "name": "π0.5",
        "values": [
          37.0,
          10.4,
          9.6,
          26.2,
          49.3,
          64.7,
          44.7,
          69.7,
          57.1
        ]
      },
      {
        "name": "π0",
        "values": [
          13.6,
          null,
          8.2,
          24.0,
          29.1,
          0.0,
          16.6,
          62.5,
          27.1
        ]
      },
      {
        "name": "OpenVLA",
        "values": [
          null,
          null,
          1.5,
          6.1,
          4.2,
          0.0,
          0.0,
          12.5,
          4.2
        ]
      }
    ],
    "metrics": [
      {
        "label": "Success rate",
        "index": 2,
        "decimals": 1,
        "unit": "%"
      },
      {
        "label": "Manipulation score",
        "index": 3,
        "decimals": 1,
        "unit": ""
      }
    ],
    "defaultMetric": 0
  },
  {
    "id": "simpler",
    "title": "SimplerEnv · WidowX",
    "source": "Table 4",
    "description": "Four Bridge-style tasks; average and per-task success rates.",
    "rows": [
      {
        "name": "WorldBridge",
        "values": [
          82.8,
          83.0,
          57.6,
          64.6,
          95.8,
          83.3,
          91.7,
          66.7,
          84.4
        ]
      },
      {
        "name": "GalaxeaVLA (G0.5)",
        "values": [
          null,
          null,
          null,
          null,
          97.5,
          75.0,
          83.3,
          93.3,
          87.3
        ]
      },
      {
        "name": "GTA-VLA",
        "values": [
          null,
          null,
          null,
          null,
          95.8,
          87.5,
          66.7,
          75.0,
          81.2
        ]
      },
      {
        "name": "InternVLA-A1.5",
        "values": [
          null,
          null,
          29.3,
          42.5,
          92.4,
          85.4,
          69.5,
          75.7,
          80.8
        ]
      },
      {
        "name": "OA-WAM",
        "values": [
          null,
          null,
          null,
          null,
          83.0,
          71.1,
          65.0,
          98.2,
          79.3
        ]
      },
      {
        "name": "Xiaomi-Robotics-0",
        "values": [
          null,
          null,
          null,
          null,
          95.8,
          62.5,
          75.0,
          83.3,
          79.2
        ]
      },
      {
        "name": "LaMem-VLA",
        "values": [
          null,
          null,
          null,
          null,
          83.3,
          75.0,
          41.7,
          95.8,
          73.9
        ]
      },
      {
        "name": "MemoryVLA",
        "values": [
          null,
          null,
          null,
          null,
          75.0,
          75.0,
          37.5,
          100.0,
          71.9
        ]
      },
      {
        "name": "StarVLA-GR00T",
        "values": [
          52.8,
          null,
          null,
          null,
          83.0,
          59.4,
          18.8,
          100.0,
          65.3
        ]
      },
      {
        "name": "StarVLA-OFT",
        "values": [
          53.8,
          null,
          10.9,
          30.5,
          90.3,
          38.5,
          29.7,
          100.0,
          64.6
        ]
      },
      {
        "name": "StarVLA-π",
        "values": [
          48.9,
          null,
          null,
          null,
          78.1,
          46.9,
          30.2,
          88.5,
          60.9
        ]
      },
      {
        "name": "GR00T-N1.7",
        "values": [
          null,
          null,
          null,
          null,
          78.0,
          58.0,
          48.0,
          53.0,
          59.3
        ]
      }
    ],
    "metrics": [
      {
        "label": "Average success rate",
        "index": 8,
        "decimals": 1,
        "unit": "%"
      },
      {
        "label": "Spoon success rate",
        "index": 4,
        "decimals": 1,
        "unit": "%"
      },
      {
        "label": "Carrot success rate",
        "index": 5,
        "decimals": 1,
        "unit": "%"
      },
      {
        "label": "Cube success rate",
        "index": 6,
        "decimals": 1,
        "unit": "%"
      },
      {
        "label": "Eggplant success rate",
        "index": 7,
        "decimals": 1,
        "unit": "%"
      }
    ],
    "defaultMetric": 0
  },
  {
    "id": "rmbench",
    "title": "RMBench",
    "source": "Table 4",
    "description": "Nine non-Markovian tasks requiring visual history.",
    "rows": [
      {
        "name": "WorldBridge",
        "values": [
          82.8,
          83.0,
          57.6,
          64.6,
          95.8,
          83.3,
          91.7,
          66.7,
          84.4
        ]
      },
      {
        "name": "MemoryWAM",
        "values": [
          null,
          83.0,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "LingBot-VA",
        "values": [
          null,
          78.2,
          24.1,
          36.1,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "Mem-0",
        "values": [
          null,
          42.0,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "name": "π0.5",
        "values": [
          37.0,
          10.4,
          9.6,
          26.2,
          49.3,
          64.7,
          44.7,
          69.7,
          57.1
        ]
      },
      {
        "name": "X-VLA",
        "values": [
          null,
          9.8,
          null,
          null,
          100.0,
          91.7,
          95.8,
          95.8,
          95.8
        ]
      },
      {
        "name": "Fast-WAM",
        "values": [
          null,
          5.9,
          19.9,
          33.3,
          null,
          null,
          null,
          null,
          null
        ]
      }
    ],
    "metrics": [
      {
        "label": "Success rate",
        "index": 1,
        "decimals": 1,
        "unit": "%"
      }
    ],
    "defaultMetric": 0
  }
];
const methodMarks = {
  "4D-WAM": {
    "file": "adelaide.png",
    "text": "4D",
    "label": "Adelaide University",
    "affiliationSource": "https://arxiv.org/pdf/2608.08023",
    "firstAuthor": "Lishan Yang"
  },
  "ABot-M0": {
    "file": "amap.ico",
    "text": "高德",
    "label": "Amap / 高德",
    "affiliationSource": "https://mobile.amap.com/cn/Index.aspx"
  },
  "ACE-Ego-0": {
    "file": "ace-official.png",
    "text": "ACE",
    "label": "ACE Robotics",
    "affiliationSource": "https://huggingface.co/ACERobotics"
  },
  "AHA-WAM": {
    "file": "sjtu.png",
    "text": "AHA",
    "label": "Shanghai Jiao Tong University",
    "firstAuthor": "Jisong Cai",
    "affiliationSource": "https://serene-sivy.github.io/aha-wam/"
  },
  "Being-H0.7": {
    "file": "being.png",
    "text": "Bei"
  },
  "DIAL": {
    "file": "hku.png",
    "text": "DIAL",
    "label": "The University of Hong Kong",
    "affiliationSource": "https://xpeng-robotics.github.io/dial/",
    "firstAuthor": "Yi Chen"
  },
  "DM0.5": {
    "file": "dexmal.png",
    "text": "DM0"
  },
  "DynamicWAM": {
    "file": "pku.png",
    "text": "DW",
    "label": "PKU-PI Lab, Peking University",
    "affiliationSource": "https://dynamicwam.github.io/",
    "firstAuthor": "Yunfan Lou"
  },
  "Fast-WAM": {
    "file": "fast-wam.svg",
    "text": "Fas",
    "label": "Tsinghua University",
    "firstAuthor": "Tianyuan Yuan",
    "affiliationSource": "https://yuantianyuan01.github.io/FastWAM/"
  },
  "GTA-VLA": {
    "file": "hit.png",
    "text": "GTA",
    "label": "Harbin Institute of Technology",
    "affiliationSource": "https://github.com/FutianLabs/GTA-VLA",
    "firstAuthor": "Yiran Ling"
  },
  "GalaxeaVLA (G0.5)": {
    "file": "galaxea.png",
    "text": "Gal"
  },
  "GigaBrain-0.7": {
    "file": "gigaai.png",
    "text": "GB",
    "label": "GigaAI",
    "affiliationSource": "https://github.com/open-gigaai/giga-brain-0"
  },
  "Hy-Embodied-0.5-VLA": {
    "file": "hunyuan.png",
    "text": "Hy"
  },
  "InternVLA-A1.5": {
    "file": "shlab.webp",
    "text": "上海AI",
    "label": "Shanghai Artificial Intelligence Laboratory / 上海人工智能实验室",
    "affiliationSource": "https://www.shlab.org.cn/"
  },
  "JoyAI-RA 0.1": {
    "file": "jd.ico",
    "text": "JD",
    "label": "JD / 京东",
    "affiliationSource": "https://www.jd.com/"
  },
  "Kairos": {
    "file": "ace-official.png",
    "text": "K",
    "label": "ACE Robotics",
    "affiliationSource": "https://huggingface.co/ACERobotics/kairos-4B-robot-RoboTwin2.0"
  },
  "LaMem-VLA": {
    "file": "njust.svg",
    "text": "LM",
    "label": "Nanjing University of Science and Technology",
    "affiliationSource": "https://arxiv.org/pdf/2607.07608",
    "firstAuthor": "Hongyu Qu"
  },
  "LingBot-VA": {
    "file": "lingbot.svg",
    "text": "Lin"
  },
  "LingBot-VA 2.0": {
    "file": "lingbot.svg",
    "text": "Lin"
  },
  "Long-WAM": {
    "file": "nvidia-square.png",
    "text": "Lon",
    "label": "NVIDIA",
    "affiliationSource": "https://github.com/NVlabs/LongLive/blob/main/Long-WAM/README.md",
    "firstAuthor": "Wei Huang"
  },
  "Long-WAM (IDM)": {
    "file": "nvidia-square.png",
    "text": "Lon",
    "label": "NVIDIA",
    "affiliationSource": "https://github.com/NVlabs/LongLive/blob/main/Long-WAM/README.md",
    "firstAuthor": "Wei Huang"
  },
  "Mem-0": {
    "file": "hku.png",
    "text": "M₀",
    "label": "The University of Hong Kong",
    "affiliationSource": "https://rmbench.github.io/",
    "firstAuthor": "Tianxing Chen"
  },
  "MemoryWAM": {
    "file": "cuhk.png",
    "text": "MW",
    "label": "The Chinese University of Hong Kong",
    "affiliationSource": "https://github.com/yangsizhe/MemoryWAM",
    "firstAuthor": "Sizhe Yang"
  },
  "MotuBrain": {
    "file": "motubrain.svg",
    "text": "Mot"
  },
  "OA-WAM": {
    "file": "fast-wam.svg",
    "text": "OA",
    "label": "Tsinghua University",
    "affiliationSource": "https://arxiv.org/pdf/2605.06481",
    "firstAuthor": "Yushan Liu"
  },
  "OpenWAM-α": {
    "file": "nus.png",
    "text": "Ope",
    "label": "National University of Singapore",
    "firstAuthor": "Yuran Wang",
    "affiliationSource": "https://openwam-official.github.io/"
  },
  "Qwen-RobotManip": {
    "file": "qwen.png",
    "text": "Qwe"
  },
  "Qwen-RobotManip-Context": {
    "file": "qwen.png",
    "text": "Qwe"
  },
  "Qwen-VLA-Instruct": {
    "file": "qwen.png",
    "text": "Qwe"
  },
  "Spatial Forcing": {
    "file": "hkust-gz.png",
    "text": "Spa",
    "label": "HKUST (Guangzhou)",
    "affiliationSource": "https://spatial-forcing.github.io/",
    "firstAuthor": "Fuhao Li"
  },
  "StarVLA": {
    "file": "starvla.svg",
    "text": "Sta",
    "label": "StarVLA Community / Von Neumann Institute, HKUST",
    "affiliationSource": "https://arxiv.org/pdf/2604.05014"
  },
  "StarVLA-GR00T": {
    "file": "starvla.svg",
    "text": "Sta",
    "label": "StarVLA Community / Von Neumann Institute, HKUST",
    "affiliationSource": "https://arxiv.org/pdf/2604.05014"
  },
  "StarVLA-OFT": {
    "file": "starvla.svg",
    "text": "Sta",
    "label": "StarVLA Community / Von Neumann Institute, HKUST",
    "affiliationSource": "https://arxiv.org/pdf/2604.05014"
  },
  "WorldBridge": {
    "file": "jd.ico",
    "text": "JD",
    "label": "JD / 京东",
    "affiliationSource": "https://www.jd.com/"
  },
  "X-WAM": {
    "file": "fast-wam.svg",
    "text": "X",
    "label": "Tsinghua University",
    "firstAuthor": "Jun Guo",
    "affiliationSource": "https://sharinka0715.github.io/X-WAM/"
  },
  "Xiaomi-Robotics-0": {
    "file": "xiaomi.ico",
    "text": "Xia"
  },
  "Xiaomi-Robotics-1": {
    "file": "xiaomi.ico",
    "text": "Xia"
  },
  "π0.5": {
    "file": "physical-intelligence.png",
    "text": "π",
    "label": "Physical Intelligence",
    "affiliationSource": "https://huggingface.co/physical-intelligence/papers"
  },
  "StarVLA-π": {
    "file": "starvla.svg",
    "text": "Sta",
    "label": "StarVLA Community / Von Neumann Institute, HKUST",
    "affiliationSource": "https://arxiv.org/pdf/2604.05014"
  },
  "StarVLA-PI_v3": {
    "file": "starvla.svg",
    "text": "Sta",
    "label": "StarVLA Community / Von Neumann Institute, HKUST",
    "affiliationSource": "https://arxiv.org/pdf/2604.05014"
  },
  "Qwen-VLA": {
    "file": "qwen.png",
    "text": "Qwe"
  },
  "π0": {
    "file": "physical-intelligence.png",
    "text": "π",
    "label": "Physical Intelligence",
    "affiliationSource": "https://huggingface.co/physical-intelligence/papers"
  },
  "Motus": {
    "file": "fast-wam.svg",
    "text": "Mot",
    "label": "Tsinghua University",
    "affiliationSource": "https://motus-robotics.github.io/motus",
    "firstAuthor": "Hongzhe Bi"
  },
  "X-VLA": {
    "file": "fast-wam.svg",
    "text": "X",
    "label": "Tsinghua University",
    "affiliationSource": "https://thu-air-dream.github.io/X-VLA/",
    "firstAuthor": "Jinliang Zheng"
  },
  "MemoryVLA": {
    "file": "fast-wam.svg",
    "text": "MV",
    "label": "Tsinghua University",
    "affiliationSource": "https://shihao1895.github.io/MemoryVLA/",
    "firstAuthor": "Hao Shi"
  },
  "GR00T-N1.7": {
    "file": "nvidia-square.png",
    "text": "NV",
    "label": "NVIDIA",
    "affiliationSource": "https://github.com/NVIDIA/Isaac-GR00T"
  },
  "PUMA": {
    "file": "hust.png",
    "text": "HUST",
    "label": "Huazhong University of Science and Technology",
    "affiliationSource": "https://h-embodvis.github.io/DOMINO/",
    "firstAuthor": "Heng Fang"
  },
  "OpenVLA": {
    "file": "stanford.png",
    "text": "S",
    "label": "Stanford University",
    "affiliationSource": "https://openvla.github.io/",
    "firstAuthor": "Moo Jin Kim"
  }
};
const mount = document.querySelector('#benchmark-charts');
function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function displayRange(values) {
  const min = Math.min(...values), max = Math.max(...values);
  const span = Math.max(max - min, 1);
  const step = span <= 10 ? 1 : span <= 35 ? 5 : 10;
  let low = Math.floor((min - span * .2) / step) * step;
  const high = Math.ceil((max + span * .12) / step) * step;
  // Keep enough room inside even the shortest bar for its value label.
  if (low < 0 && min / high >= .10) low = 0;
  return [low, high];
}
function methodMark(name) {
  const info = methodMarks[name];
  const mark = node('span', 'benchmark-logo');
  mark.setAttribute('aria-hidden', 'true');
  mark.title = info.label ? name + ' · ' + info.label : name;
  if (info.file) {
    const img = node('img', '');
    img.src = 'assets/benchmark-logos/' + info.file;
    img.alt = '';
    img.addEventListener('error', () => {
      mark.replaceChildren(node('span', 'benchmark-wordmark', info.text));
    }, {once:true});
    mark.append(img);
  } else {
    mark.append(node('span', 'benchmark-wordmark', info.text));
  }
  return mark;
}
benchmarks.forEach(benchmark => {
  const compact = benchmark.id !== 'robotwin';
  const card = node('article', 'benchmark-chart' + (compact ? ' benchmark-chart-compact' : '') + (compact && benchmark.rows.length > 8 ? ' benchmark-chart-dense' : ''));
  card.id = 'chart-' + benchmark.id;
  const fixedDensity = !['robotwin-c2r', 'robocasa'].includes(benchmark.id);
  if (fixedDensity) card.classList.add('benchmark-chart-fixed-density');
  const header = node('div', 'benchmark-chart-header');
  const heading = node('div', 'benchmark-chart-heading');
  const title = node('h3', '', benchmark.title);
  title.id = card.id + '-title';
  heading.append(title, node('p', '', benchmark.description));
  const controls = node('div', 'benchmark-chart-controls');
  let select;
  if (benchmark.metrics.length > 1) {
    select = node('select', 'benchmark-metric');
    select.setAttribute('aria-label', benchmark.title + ' metric');
    benchmark.metrics.forEach((metric, i) => {
      const option = node('option', '', metric.label);
      option.value = i;
      select.append(option);
    });
    controls.append(select);
  } else {
    controls.append(node('span', 'benchmark-metric-label', benchmark.metrics[0].label));
  }
  header.append(heading, controls);
  const scroller = node('div', 'benchmark-chart-scroll');
  scroller.tabIndex = 0;
  scroller.setAttribute('role', 'region');
  scroller.setAttribute('aria-labelledby', title.id);
  const chart = node('div', 'benchmark-plot');
  scroller.append(chart);
  const note = node('p', 'benchmark-chart-note');
  card.append(header, scroller, note);
  mount.append(card);
  function render(metricIndex) {
    const metric = benchmark.metrics[metricIndex];
    const reported = benchmark.rows.filter(row => row.values[metric.index] !== null);
    const ours = reported.find(row => row.name === 'WorldBridge');
    const baselines = reported.filter(row => row.name !== 'WorldBridge').sort((a, b) => a.values[metric.index] - b.values[metric.index] || a.name.localeCompare(b.name));
    const rows = [ours, ...baselines];
    const [low, high] = displayRange(rows.map(row => row.values[metric.index]));
    chart.replaceChildren();
    chart.style.setProperty('--method-count', rows.length);
    if (!fixedDensity) chart.style.minWidth = (rows.length * (compact ? (rows.length > 8 ? 36 : 48) : 55) + 30) + 'px';
    chart.dataset.metric = metric.label;
    chart.dataset.minimum = low;
    chart.dataset.maximum = high;
    rows.forEach(row => {
      const value = row.values[metric.index];
      const isOurs = row.name === 'WorldBridge';
      const column = node('div', 'benchmark-column' + (isOurs ? ' is-ours' : ''));
      column.dataset.method = row.name;
      column.dataset.value = value;
      column.setAttribute('aria-label', row.name + ': ' + value.toFixed(metric.decimals) + metric.unit);
      const barArea = node('div', 'benchmark-bar-area');
      const bar = node('div', 'benchmark-bar');
      bar.style.height = (value - low) / (high - low) * 100 + '%';
      bar.append(methodMark(row.name), node('span', 'benchmark-value', value.toFixed(metric.decimals)));
      barArea.append(bar);
      const name = node('div', 'benchmark-name');
      name.append(node('span', '', row.name));
      column.append(barArea, name);
      chart.append(column);
    });
    note.textContent = metric.label + (metric.unit ? ' (%)' : '') + ' · Display range ' + String(low).replace('-', '−') + '–' + high + metric.unit + ' · ' + (benchmark.id === 'rmbench' ? 'All ' + rows.length + ' methods reported in the paper' : rows.length + ' selected methods');
    scroller.scrollLeft = 0;
  }
  if (select) select.addEventListener('change', () => render(Number(select.value)));
  render(benchmark.defaultMetric);
});

})();
