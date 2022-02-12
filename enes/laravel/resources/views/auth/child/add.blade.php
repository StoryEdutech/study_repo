<x-app-layout>
  <x-slot name="logo">
      <a href="/">
          <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
      </a>
  </x-slot>
  <x-slot name="header">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          {{ __('Dashboard') }}
      </h2>
  </x-slot>

<form method="POST" action="{{ route('child.add') }}">
  <select name="grade">
        @foreach ($can_add_grade as $grade)
          <option value="{{ $grade }}">{{ $grade }}</option>
        @endforeach
  </select>
<input name="name">

@csrf
<button class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
  子ども追加
</button>
</form>
</x-app-layout>
