"use client";

import { Card } from "@/component/Card";
import { CardContent } from "@/component/CardContent";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold md:text-6xl"
        >
          안녕하세요!
          <br />
          저는 프론트엔드 개발자입니다.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-lg text-gray-600 dark:text-gray-300"
        >
          React, Next.js, TypeScript를 사용해 사용자 경험을 고민하는
          개발자입니다.
        </motion.p>
        <button className="mt-6">프로젝트 보러가기</button>
      </section>

      {/* Project Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-3xl font-bold text-center">프로젝트</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">프로젝트 {item}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    간단한 프로젝트 설명을 적어주세요.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center justify-center py-20">
        <h2 className="mb-6 text-3xl font-bold">Contact</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          이메일: example@email.com
        </p>
      </section>
    </main>
  );
}
