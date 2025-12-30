# Week 10 — The Master Capstone

Phase: Capstone Integration (End of program)

Project: Real-time Enterprise Analytics Suite

Overview
- Users upload data via the frontend
- Data is processed using Spark (or alternative) orchestrated by Airflow
- Results are stored in Postgres and cached in Redis
- Frontend uses TanStack Query to visualize and interact with analytics

Tech Integration
- FE: React + TanStack Query for data fetching and visualizations
- Data Eng: Spark jobs to transform raw uploads into analytics-ready datasets
- Orchestration: Airflow DAGs to schedule and monitor pipelines
- Storage: Postgres for relational analytics; Redis for low-latency caches
- Hosting: Deploy to AWS on Kubernetes for scalability

Deliverables
- End-to-end demo that ingests files, runs the pipeline, and displays live metrics
- Infrastructure IaC snippets and a basic deployment workflow

Skill Practice
- Full-system integration, observability, and performance profiling
