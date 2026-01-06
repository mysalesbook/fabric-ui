// components/Loading.tsx
export default function Loading() {
    return (
      <div className="loading-screen">
        <h2>Loading...</h2>
        <style jsx>{`
          .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            z-index: 9999;
          }
        `}</style>
      </div>
    );
  }
  