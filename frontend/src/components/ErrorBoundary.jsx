import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#1a2f52] flex items-center justify-center px-6">
          <div className="max-w-2xl w-full text-center">
            {/* أيقونة التحذير */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#FFB366] rounded-full p-6">
                <AlertTriangle className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* العنوان */}
            <h1 className="text-4xl font-bold text-white mb-4">
              عذراً، حدث خطأ ما!
            </h1>

            {/* الوصف */}
            <p className="text-xl text-gray-300 mb-8">
              نعتذر عن هذا الخطأ. يرجى تحديث الصفحة أو العودة إلى الصفحة الرئيسية.
            </p>

            {/* تفاصيل الخطأ (فقط في Development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-[#2E5AAC] rounded-lg p-6 mb-8 text-left">
                <p className="text-red-400 font-mono text-sm break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            {/* الأزرار */}
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => window.location.reload()}
                className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-8 py-4 rounded-lg text-lg transition-all duration-300"
              >
                تحديث الصفحة
              </button>
              
              <Link to="/">
                <button className="bg-[#2E5AAC] hover:bg-[#3d6fc4] text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  العودة للرئيسية
                </button>
              </Link>
            </div>

            {/* معلومات إضافية */}
            <p className="text-gray-400 text-sm mt-8">
              إذا استمرت المشكلة، يرجى التواصل معنا عبر واتساب
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
